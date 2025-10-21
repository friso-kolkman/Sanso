// Serverless function to append contact submissions to a Google Sheet
// Two modes:
// 1) Webhook (SHEETS_WEBHOOK_URL) to services like SheetMonkey/NoCodeAPI/sheet.best
// 2) Direct Google Sheets API with service account (GOOGLE_SERVICE_ACCOUNT_* + GOOGLE_SHEET_ID)

function parseBody(req) {
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body || '{}')
    } catch {
      return {}
    }
  }
  return req.body || {}
}

function buildPayload({ email, phone, message }, userAgent) {
  const timestamp = new Date().toISOString()
  return {
    timestamp,
    email: email ?? '',
    phone: phone ?? '',
    message: message ?? '',
    userAgent: userAgent || '',
  }
}

async function sendViaWebhook(url, payload) {
  // Try JSON first
  let response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!response.ok) {
    // Fallback to form-urlencoded
    const params = new URLSearchParams()
    Object.entries(payload).forEach(([k, v]) => params.append(k, String(v)))
    response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
  }
  return response
}

async function appendToGoogleSheets(sheetId, payload) {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKeyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
  const privateKey = privateKeyRaw ? privateKeyRaw.replace(/\\n/g, '\n') : undefined

  if (!clientEmail || !privateKey) {
    throw new Error('Missing Google service account credentials')
  }

  const { google } = await import('googleapis')
  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'A:E',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [[payload.timestamp, payload.email, payload.phone, payload.message, payload.userAgent]] },
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const webhookUrl = process.env.SHEETS_WEBHOOK_URL
  const sheetId = process.env.GOOGLE_SHEET_ID

  try {
    const body = parseBody(req)
    const userAgent = req.headers['user-agent'] || ''
    const payload = buildPayload(body, userAgent)

    // Fast-path: if a webhook URL is provided (e.g., SheetMonkey/NoCodeAPI/sheet.best), post directly
    if (webhookUrl) {
      const response = await sendViaWebhook(webhookUrl, payload)

      if (!response.ok) {
        const text = await response.text().catch(() => '')
        return res.status(response.status || 500).json({ error: text || 'Webhook error' })
      }
      return res.status(200).json({ ok: true, via: 'webhook' })
    }

    // Default: direct Google Sheets API using service account
    if (!sheetId) return res.status(500).json({ error: 'Missing GOOGLE_SHEET_ID' })
    await appendToGoogleSheets(sheetId, payload)
    return res.status(200).json({ ok: true, via: 'googleapis' })
  } catch (err) {
    console.error('Waitlist append failed:', err)
    return res.status(500).json({ error: 'Failed to save submission' })
  }
}



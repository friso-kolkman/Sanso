// Serverless function to append contact submissions to a Google Sheet
// Expects env vars: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY, GOOGLE_SHEET_ID

import { google } from 'googleapis'

function getJwtClient() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKeyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
  const privateKey = privateKeyRaw ? privateKeyRaw.replace(/\\n/g, '\n') : undefined

  if (!clientEmail || !privateKey) {
    throw new Error('Missing Google service account credentials')
  }

  const scopes = ['https://www.googleapis.com/auth/spreadsheets']
  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes,
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
    const { email, phone, message } = (typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body) || {}

    if (!email || !message) {
      return res.status(400).json({ error: 'Email and message are required' })
    }

    const timestamp = new Date().toISOString()
    const userAgent = req.headers['user-agent'] || ''

    // Fast-path: if a webhook URL is provided (e.g., SheetMonkey/NoCodeAPI/sheet.best), post directly
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp,
          email,
          phone: phone || '',
          message,
          userAgent,
        }),
      })

      if (!response.ok) {
        const text = await response.text().catch(() => '')
        throw new Error(`Webhook error ${response.status}: ${text}`)
      }
      return res.status(200).json({ ok: true, via: 'webhook' })
    }

    // Default: direct Google Sheets API using service account
    if (!sheetId) {
      return res.status(500).json({ error: 'Missing GOOGLE_SHEET_ID' })
    }
    const auth = await getJwtClient()
    const sheets = google.sheets({ version: 'v4', auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, email, phone || '', message, userAgent]],
      },
    })

    return res.status(200).json({ ok: true, via: 'googleapis' })
  } catch (err) {
    console.error('Waitlist append failed:', err)
    return res.status(500).json({ error: 'Failed to save submission' })
  }
}



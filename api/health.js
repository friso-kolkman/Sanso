// Lightweight health endpoint to verify runtime configuration on Vercel
// Returns booleans only; does not expose secrets

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const usingWebhook = Boolean(process.env.SHEETS_WEBHOOK_URL)
  const usingGoogle = Boolean(
    process.env.GOOGLE_SHEET_ID &&
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
  )

  const mode = usingWebhook ? 'webhook' : usingGoogle ? 'googleapis' : 'unconfigured'

  return res.status(200).json({
    ok: true,
    mode,
    env: {
      SHEETS_WEBHOOK_URL: usingWebhook,
      GOOGLE_SHEET_ID: Boolean(process.env.GOOGLE_SHEET_ID),
      GOOGLE_SERVICE_ACCOUNT_EMAIL: Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL),
      GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY),
    },
    vercel: Boolean(process.env.VERCEL),
    node: process.version,
  })
}



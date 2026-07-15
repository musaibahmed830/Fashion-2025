import { NextRequest, NextResponse } from 'next/server'

// Generic webhook receiver for analytics/marketing tool callbacks.
// If WEBHOOK_SECRET is set, the caller must send it back either as:
//   - header: x-webhook-secret: <secret>
//   - or query param: ?secret=<secret>
// Without WEBHOOK_SECRET configured, requests are accepted unverified -
// set the env var once you know which tool will be calling this and
// whether it supports a shared secret.
export async function POST(request: NextRequest) {
  const configuredSecret = process.env.WEBHOOK_SECRET

  if (configuredSecret) {
    const headerSecret = request.headers.get('x-webhook-secret')
    const querySecret = request.nextUrl.searchParams.get('secret')
    if (headerSecret !== configuredSecret && querySecret !== configuredSecret) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }
  }

  let payload: unknown = null
  const contentType = request.headers.get('content-type') || ''

  try {
    if (contentType.includes('application/json')) {
      payload = await request.json()
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const form = await request.formData()
      payload = Object.fromEntries(form.entries())
    } else {
      payload = await request.text()
    }
  } catch {
    payload = null
  }

  // Logged to Vercel's function logs (Project -> Deployments -> Functions/Logs).
  // Swap this for real storage (a database, a queue, forwarding elsewhere)
  // once the target service and payload shape are known.
  console.log('[webhook] received', {
    timestamp: new Date().toISOString(),
    contentType,
    payload,
  })

  return NextResponse.json({ success: true, received: true })
}

// Some services verify a webhook URL with a GET request before sending real events.
export async function GET() {
  return NextResponse.json({ success: true, message: 'Webhook endpoint is live' })
}

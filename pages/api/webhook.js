import Stripe from 'stripe'
import getRawBody from 'raw-body'

export const config = { api: { bodyParser: false } }

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const sig = req.headers['stripe-signature']
  try {
    const buf = await getRawBody(req)
    const event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET)
    if (event.type === 'payment_intent.succeeded') {
      const pi = event.data.object
      console.log('Payment succeeded:', pi.id)
    }
    res.json({ received: true })
  } catch (err) {
    console.error('Webhook Error:', err.message)
    res.status(400).send(`Webhook Error: ${err.message}`)
  }
}

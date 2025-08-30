import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  try {
    const account = await stripe.accounts.create({ type: 'express' })
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: process.env.NEXT_PUBLIC_APP_URL + '/onboard/refresh',
      return_url: process.env.NEXT_PUBLIC_APP_URL + '/onboard/return',
      type: 'account_onboarding',
    })
    res.json({ accountId: account.id, url: accountLink.url })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

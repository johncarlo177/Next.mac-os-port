# Simple Email Setup - Formspree (Recommended)

The Web3Forms API is blocked by Cloudflare, so we're switching to Formspree which is more reliable.

## Quick Setup (2 minutes):

1. Go to https://formspree.io
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (it will look like: `https://formspree.io/f/YOUR_FORM_ID`)
5. Open `src/routes/api/contact/+server.ts`
6. Replace `YOUR_FORMSPREE_ID` with your actual Formspree form ID

That's it! The form will work immediately.

## Alternative: Check Server Logs

If you don't want to set up Formspree right now, the form will still work - it will log all submissions to your server console. Check your terminal where you run `npm run dev` to see all form submissions.

## Other Options:

- **Resend** (https://resend.com) - Modern, reliable, free tier
- **SendGrid** (https://sendgrid.com) - Enterprise-grade, free tier
- **EmailJS** (https://www.emailjs.com) - Client-side, free tier


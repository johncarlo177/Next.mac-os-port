# Email Setup Instructions

To receive contact form submissions at `inmc050817@gmail.com`, you have several options:

## Option 1: Web3Forms (Recommended - Free & Easy)

1. Go to https://web3forms.com
2. Enter your email: `inmc050817@gmail.com`
3. Get your access key
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/routes/api/contact/+server.ts` with your actual key

## Option 2: Resend (Modern & Reliable)

1. Sign up at https://resend.com
2. Get your API key
3. Install Resend: `npm install resend`
4. Update `src/routes/api/contact/+server.ts`:

```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Portfolio <noreply@yourdomain.com>',
  to: 'inmc050817@gmail.com',
  subject: subject,
  html: emailBody,
  reply_to: email,
});
```

## Option 3: EmailJS (Client-side, Free)

1. Sign up at https://www.emailjs.com
2. Create an email service
3. Update the Contact component to use EmailJS directly (client-side)

## Option 4: Formspree (Simple Form Backend)

1. Sign up at https://formspree.io
2. Create a form endpoint
3. Update the Contact component to POST directly to Formspree

## Current Implementation

The current setup uses Web3Forms. You just need to:
1. Get your access key from https://web3forms.com
2. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in the code

The form will work immediately after adding your access key!


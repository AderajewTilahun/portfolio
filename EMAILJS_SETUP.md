# EmailJS Setup Instructions

To make the contact form fully functional, you need to configure EmailJS with your credentials.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. After logging in, go to the "Email Services" section
2. Click "Add New Service"
3. Choose a service provider (Gmail is recommended for personal use)
4. Follow the instructions to connect your email account
5. Copy your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to the "Email Templates" section
2. Click "Create New Template"
3. Configure your template with the following variables:

**Subject:** `New Contact Form Message from {{from_name}}`

**To Email:** `aderajewtilahun495@gmail.com` (or your preferred email)

**Message Body:**
```
You have received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template
5. Copy your **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to the "Account" section in EmailJS
2. Find your **Public Key** (also called API Key)
3. Copy this key

## Step 5: Update the Contact Component

Open `src/components/Contact.jsx` and replace the placeholder values with your actual credentials:

```javascript
// EmailJS Configuration - Replace with your actual credentials
const SERVICE_ID = "YOUR_SERVICE_ID";      // Replace with your Service ID
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";    // Replace with your Template ID
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";       // Replace with your Public Key
```

## Step 6: Test the Contact Form

1. Start your development server: `npm start`
2. Navigate to the Contact section
3. Fill out the form with test data
4. Submit the form
5. Check your email to verify the message was received

## Troubleshooting

**If emails are not sending:**
- Verify your Service ID, Template ID, and Public Key are correct
- Check that your email service is properly connected in EmailJS
- Ensure your template variables match exactly (from_name, from_email, message, to_name)
- Check the browser console for error messages

**Free Tier Limitations:**
- EmailJS free tier allows 200 emails per month
- For higher volume, consider upgrading to a paid plan

## Security Notes

- The Public Key is safe to expose in client-side code
- Never share your Private Key or account credentials
- EmailJS handles the secure email delivery without exposing your email credentials

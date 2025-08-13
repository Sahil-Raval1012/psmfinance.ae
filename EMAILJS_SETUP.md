# EmailJS Integration Setup Guide

This guide will help you set up EmailJS for the PSM Financial Broker contact form. Follow these steps to enable email functionality.

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## 2. Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for easy setup)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Custom SMTP** (for business emails)
4. Follow the authentication process
5. **Copy the Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

### Main Contact Form Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** `PSM Contact Form`

**Subject:** `New Inquiry from {{from_name}} - {{service}}`

**Content:**
```
Dear PSM Financial Broker Team,

You have received a new inquiry through your website contact form.

Client Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Service Interest: {{service}}

Message:
{{message}}

Submission Details:
- Date: {{submission_date}}
- Timezone: {{client_timezone}}

Please respond to this inquiry within 24 hours.

Best regards,
PSM Website System
```

**From Name:** `PSM Website`
**From Email:** Your business email (e.g., `info@psmfinancial.ae`)
**To Email:** Your business email where you want to receive inquiries

4. **Copy the Template ID** (e.g., `template_xyz789`)

### Optional: Auto-Reply Template

1. Create another template for client confirmation
2. **Template Name:** `PSM Auto-Reply`
3. **Subject:** `Thank you for contacting PSM Financial Broker`

**Content:**
```
Dear {{to_name}},

Thank you for your interest in PSM Financial Broker's services.

We have received your inquiry regarding {{service}} and will respond within 24 hours during business hours (Sunday-Thursday, 9:00 AM - 6:00 PM UAE time).

If you have urgent matters, please contact us directly at:
- Phone: +971 4 XXX XXXX
- Email: info@psmfinancial.ae

Best regards,
{{from_name}}
PSM Financial Broker
```

**To Email:** `{{to_email}}`
**From Name:** `PSM Financial Broker`
**From Email:** Your business email

5. **Copy the Auto-Reply Template ID** (e.g., `template_auto456`)

## 4. Get Public Key

1. Go to **Account** in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abcdef123456`)
3. Copy this key

## 5. Add Environment Variables to Replit

1. In your Replit project, click the **Secrets** tab (lock icon)
2. Add these environment variables:

```
Key: VITE_EMAILJS_SERVICE_ID
Value: service_abc123  (your service ID)

Key: VITE_EMAILJS_TEMPLATE_ID  
Value: template_xyz789  (your main template ID)

Key: VITE_EMAILJS_PUBLIC_KEY
Value: user_abcdef123456  (your public key)

Key: VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID  (optional)
Value: template_auto456  (your auto-reply template ID)
```

## 6. Restart Your Application

1. Stop your Replit application
2. Start it again to load the new environment variables
3. The contact form will now send emails!

## 7. Test the Integration

1. Fill out the contact form on your website
2. Submit the form
3. Check your email for the inquiry
4. Check the sender's email for the auto-reply (if configured)

## Troubleshooting

### Form shows "Configuration Required" error
- Check that all required environment variables are set in Replit Secrets
- Ensure there are no typos in the variable names
- Restart your application after adding secrets

### Emails not being sent
- Verify your EmailJS service is properly authenticated
- Check the browser console for error messages
- Ensure your EmailJS account hasn't exceeded the monthly limit
- Verify template variable names match exactly

### Template variables not working
- Ensure variable names in templates match those sent from the form:
  - `{{from_name}}` - Client's full name
  - `{{from_email}}` - Client's email
  - `{{phone}}` - Client's phone number
  - `{{service}}` - Selected service
  - `{{message}}` - Client's message
  - `{{to_name}}` - Your company name
  - `{{submission_date}}` - Submission timestamp
  - `{{client_timezone}}` - Client's timezone

### Auto-reply not working
- Auto-reply is optional - the main form will work without it
- Ensure `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID` is set correctly
- Check that the auto-reply template uses `{{to_email}}` for the recipient

## Security Best Practices

1. **Never expose your private key** - only use the public key in frontend code
2. **Set up domain restrictions** in EmailJS dashboard to prevent abuse
3. **Monitor your email quota** to prevent service interruption
4. **Use reCAPTCHA** if you experience spam (can be added later)

## Customization

### Adding More Form Fields
If you add fields to the contact form, update:
1. The form component (`contact-section.tsx`)
2. The EmailJS template to include new variables
3. The `templateParams` object in the form submission handler

### Changing Email Design
1. Edit your EmailJS templates with HTML for better formatting
2. Add CSS styles inline for rich email design
3. Test email appearance across different email clients

## Support

- **EmailJS Documentation:** [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **EmailJS Status:** Check service status if emails stop working
- **Replit Secrets:** Ensure environment variables are properly set

Your EmailJS integration is now complete! The contact form will securely send emails without needing a backend server.
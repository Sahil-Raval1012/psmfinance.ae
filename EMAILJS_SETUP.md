# EmailJS Integration Setup Guide

This guide will help you set up EmailJS for the PSM Financial Broker contact form.

## Prerequisites

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Verify your email address

## Setup Steps

### 1. Create an Email Service

1. Go to the [EmailJS Admin Panel](https://dashboard.emailjs.com/)
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

### 2. Create an Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Inquiry from {{from_name}}

Hello PSM Financial Broker,

You have received a new contact inquiry:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interest: {{service_interest}}

Message:
{{message}}

Please respond promptly to this high-value inquiry.

Best regards,
PSM Website Contact System
```

4. Note down your **Template ID**

### 3. Get Your Public Key

1. Go to "Account" in the dashboard
2. Find your **Public Key** (User ID)

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env`
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxx
```

### 5. Template Variables

The contact form sends these variables to your EmailJS template:

- `{{to_name}}` - "PSM Financial Broker"
- `{{from_name}}` - Full name from form
- `{{from_email}}` - Email address from form
- `{{phone}}` - Phone number from form
- `{{service_interest}}` - Selected service from dropdown
- `{{message}}` - Message content
- `{{reply_to}}` - Email for replies

### 6. Email Service Configuration

**For Gmail:**
- Use your Gmail account
- Enable 2-factor authentication
- Use App Password instead of regular password

**For Business Email:**
- Configure SMTP settings
- Ensure proper authentication

## Testing

1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Check your configured email for the message
4. Check the browser console for any errors

## Troubleshooting

**Form not sending:**
- Check browser console for errors
- Verify all environment variables are set
- Ensure EmailJS service is active

**Emails not received:**
- Check spam folder
- Verify email service configuration
- Test with a different email template

**CORS errors:**
- EmailJS should handle CORS automatically
- Ensure you're using the correct public key

## Production Deployment

1. Set environment variables in your production environment
2. Update the domains in your EmailJS account settings
3. Test the form after deployment

## Fallback Behavior

The contact form has built-in fallback:
1. Tries EmailJS first (if configured)
2. Falls back to server-side handling if EmailJS fails
3. Shows appropriate error messages to users

## Security Notes

- Never expose your private EmailJS keys
- Use environment variables for all sensitive data
- Monitor your EmailJS usage to prevent abuse
- Consider implementing rate limiting for high-traffic sites
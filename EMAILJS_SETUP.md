# EmailJS Setup Guide

To make the contact form send real emails, follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact from {{from_name}} - {{subject}}

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Copy your **Template ID**

## 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key**

## 5. Update ContactSection.jsx
Replace these placeholders in `src/components/ContactSection.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## 6. Test the Form
1. Run your development server: `npm run dev`
2. Fill out the contact form and submit
3. Check your email inbox for the message

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Perfect for portfolio websites

## Alternative: Formspree
If you prefer a simpler setup, you can also use [Formspree](https://formspree.io/) which requires minimal configuration.
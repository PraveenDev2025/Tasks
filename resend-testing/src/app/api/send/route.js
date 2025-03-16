import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json(); // Get form data from request
    const { name, email, phone, subject, message } = body; // Extract form fields

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['ffworld2101@gmail.com'], // Replace with your actual email
      subject: subject || "New Contact Form Submission",
      react: React.createElement(EmailTemplate, { name, email, phone, subject, message }), // Use EmailTemplate
      text: `
        New Contact Form Submission:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

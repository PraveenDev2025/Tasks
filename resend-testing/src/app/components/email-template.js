import React from 'react';

export const EmailTemplate = ({ name, email, phone, subject, message }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: '1.5', color: '#333' }}>
    <h2 style={{ color: '#007bff' }}>New Contact Form Submission</h2>
    
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Phone:</strong> {phone}</p>
    <p><strong>Subject:</strong> {subject}</p>
    <p><strong>Message:</strong></p>
    <p style={{ background: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>{message}</p>

    <hr />
    <p style={{ fontSize: '12px', color: '#555' }}>This email was sent from your website's contact form.</p>
  </div>
);

const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 465,
    secure: process.env.SMTP_SECURE === 'true' || true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

// Send email
const sendEmail = async (options) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: options.to || process.env.ADMIN_EMAIL,
      subject: options.subject,
      html: options.html,
      text: options.text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    // Return error but don't throw - we don't want to break the application if email fails
    return { success: false, error: error.message };
  }
};

// Send inquiry notification email
const sendInquiryEmail = async (inquiryData) => {
  const { name, email, phone, subject, message, type, country, preferredDate, preferredTime } = inquiryData;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #8CC63F;">New RouteX Website Inquiry</h2>
      <p>A new inquiry has been submitted on the RouteX Study Abroad website.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone || 'N/A'}</td>
        </tr>
        ${type ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Inquiry Type:</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${type}</td>
        </tr>
        ` : ''}
        ${country ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Country/Destination:</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${country}</td>
        </tr>
        ` : ''}
        ${subject ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Subject:</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${subject}</td>
        </tr>
        ` : ''}
        ${preferredDate ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Date:</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${preferredDate}</td>
        </tr>
        ` : ''}
        ${preferredTime ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Time:</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${preferredTime}</td>
        </tr>
        ` : ''}
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Message:</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${message || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold;">Submitted:</td>
          <td style="padding: 10px;">${new Date().toLocaleString()}</td>
        </tr>
      </table>
      
      <p style="margin-top: 20px; color: #666; font-size: 12px;">
        This is an automated email from the RouteX Study Abroad website.
      </p>
    </div>
  `;

  const text = `
New RouteX Website Inquiry

Name: ${name || 'N/A'}
Email: ${email || 'N/A'}
Phone: ${phone || 'N/A'}
${type ? `Inquiry Type: ${type}` : ''}
${country ? `Country/Destination: ${country}` : ''}
${subject ? `Subject: ${subject}` : ''}
${preferredDate ? `Preferred Date: ${preferredDate}` : ''}
${preferredTime ? `Preferred Time: ${preferredTime}` : ''}
Message: ${message || 'N/A'}
Submitted: ${new Date().toLocaleString()}
  `;

  return sendEmail({
    to: process.env.ADMIN_EMAIL || 'norvextechnologies@gmail.com',
    subject: 'New RouteX Website Inquiry',
    html,
    text,
  });
};

module.exports = {
  sendEmail,
  sendInquiryEmail,
};

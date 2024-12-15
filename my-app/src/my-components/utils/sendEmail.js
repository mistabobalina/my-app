// File: src/util/sendEmail.js
import emailjs from 'emailjs-com';
import emailConfig from '../../my-data/emailConfig';

// Email sending function
export const sendEmail = async (templateParams) => {
  try {
    const result = await emailjs.send(
      emailConfig.SERVICE_ID, // Use values from emailConfig
      emailConfig.TEMPLATE_ID,
      templateParams,
      emailConfig.USER_ID // Use USER_ID if defined
    );
    console.log('Email sent successfully:', result.text);
    return true; // Indicate success
  } catch (error) {
    console.error('Error sending email:', error);
    return false; // Indicate failure
  }
};

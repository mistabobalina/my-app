// File: ../my-components/ContactModal.js

import React, { useState } from 'react';
import { Box } from '@mui/material';
import CustomButton from './Button';
import ModalBase from './ModalBase';
import InputField from './InputField';
import { sendEmail } from './utils/sendEmail';

const ContactModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    customSubject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject:
        formData.subject === 'Here’s My Custom Idea!'
          ? formData.customSubject
          : formData.subject,
      message: formData.message,
    };

    const success = await sendEmail(templateParams);
    setSubmissionSuccess(success);
    setIsSubmitting(false);

    if (success) {
      setTimeout(() => {
        onClose(); // Close modal after success
      }, 2000); // Optional delay for success feedback
    }
  };

  const subjects = [
    'General Inquiry',
    'I Have a Proposal for You!',
    'Can We Collaborate? 🤝',
    'UX SOS! Help Me Out!',
    'I Just Love Your Work 😍',
    'Do You Speak at Events?',
    'Feature Request (Because You’re a Genius)',
    'Here’s My Custom Idea!', // Custom subject option
  ];

  return (
    <ModalBase open={open} onClose={onClose} title="Contact Me">
      {!submissionSuccess ? (
        <form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            value={formData.name}
            onChange={handleChange}
            name="name"
            required
          />
          <InputField
            label="Email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email"
            required
          />
          <InputField
            label="Subject"
            value={formData.subject}
            onChange={handleChange}
            name="subject"
            select
            required
            options={subjects}
          />
          {formData.subject === 'Here’s My Custom Idea!' && (
            <InputField
              label="Custom Subject"
              value={formData.customSubject}
              onChange={handleChange}
              name="customSubject"
              required
            />
          )}
          <InputField
            label="Message"
            value={formData.message}
            onChange={handleChange}
            name="message"
            multiline
            rows={4}
            required
          />
          <CustomButton
            type="submit"
            fullWidth
            disabled={isSubmitting}
            sx={{
              marginTop: 2,
              backgroundColor: (theme) => theme.palette.primary.main,
              '&:hover': {
                backgroundColor: (theme) => theme.palette.primary.dark,
              },
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </CustomButton>
        </form>
      ) : (
        <Box
          sx={{
            textAlign: 'center',
            padding: 4,
          }}
        >
          <Box>
            <span role="img" aria-label="success">
              🎉
            </span>
          </Box>
          <Box>
            <h3>Success!</h3>
            <p>Your message has been sent. We'll be in touch soon!</p>
          </Box>
        </Box>
      )}
    </ModalBase>
  );
};

export default ContactModal;

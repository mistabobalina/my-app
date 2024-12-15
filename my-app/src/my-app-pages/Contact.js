import React, { useState } from 'react';
import ContactModal from '../my-components/ContactModal';
import { Button } from '@mui/material';

const ContactPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setModalOpen(true)} variant="contained">
        Open Contact Modal
      </Button>
      <ContactModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default ContactPage;

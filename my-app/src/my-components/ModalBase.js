// File: ../my-components/ModalBase.js

import React from 'react';
import { Modal, Paper, Box } from '@mui/material';

const ModalBase = ({ open, onClose, children, title, sx = {} }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx, // Allow overrides if necessary
      }}
    >
      <Paper
        elevation={3}
        sx={(theme) => ({
          width: '90%',
          maxWidth: 600,
          padding: theme.spacing(4),
          [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(6),
          },
          ...sx, // Allow overrides for Paper as well
        })}
      >
        <Box>
          {/* Optional Title */}
          {title && (
            <Box sx={{ marginBottom: 2 }}>
              <h2 id="modal-title">{title}</h2>
            </Box>
          )}
          <div id="modal-description">{children}</div>
        </Box>
      </Paper>
    </Modal>
  );
};

export default ModalBase;

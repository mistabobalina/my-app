import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'secondary.main',
        color: 'text.primary',
        textAlign: 'center',
        py: 2,
        position: 'relative', // Change from fixed to relative to stay within layout
        bottom: 0,
        width: '100%',
        boxSizing: 'border-box', // Ensure padding is included in the width
      }}
    >
      <Typography variant="body2">
        © 2024 My Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

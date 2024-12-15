// File: my-components/CustomTextField.js

import React from 'react';
import { TextField } from '@mui/material';

const CustomTextField = ({ label, type = 'text', value, onChange, ...props }) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      fullWidth
      variant="outlined"
      {...props} // Pass additional props dynamically
    />
  );
};

export default CustomTextField;

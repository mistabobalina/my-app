// File: ../my-components/InputField.js

import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const InputField = ({
  label,
  value,
  onChange,
  name,
  placeholder = '',
  type = 'text',
  required = false,
  fullWidth = true,
  sx = {},
  multiline = false,
  rows,
  select = false, // New prop for dropdown
  options = [], // New prop for dropdown options
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      type={type}
      required={required}
      fullWidth={fullWidth}
      variant="outlined"
      multiline={multiline}
      rows={rows}
      select={select} // Enable dropdown
      sx={(theme) => ({
        marginBottom: theme.spacing(2),
        ...sx,
      })}
    >
      {select &&
        options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default InputField;
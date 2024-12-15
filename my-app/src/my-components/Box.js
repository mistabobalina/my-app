// File: ../my-components/Box.js

import React from 'react';
import { Box as MuiBox } from '@mui/material';

const Box = ({ children, ...props }) => {
  return <MuiBox {...props}>{children}</MuiBox>;
};

export default Box;
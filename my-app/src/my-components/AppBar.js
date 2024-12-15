// File: ../my-components/AppBar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MyAppBar = () => {
  return (
    <AppBar
      position="static"
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main, // Dynamic primary color
        color: theme.palette.primary.contrastText, // Dynamic text contrast
      })}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: (theme) => theme.typography.fontWeightBold, // Dynamic font weight
          }}
        >
          My Portfolio
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={(theme) => ({
            textTransform: 'none', // Disable uppercase transformation
            marginLeft: theme.spacing(2), // Add consistent spacing
            '&:hover': {
              color: theme.palette.secondary.main, // Add hover effect
            },
          })}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          sx={(theme) => ({
            textTransform: 'none',
            marginLeft: theme.spacing(2),
            '&:hover': {
              color: theme.palette.secondary.main,
            },
          })}
        >
          About
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/projects"
          sx={(theme) => ({
            textTransform: 'none',
            marginLeft: theme.spacing(2),
            '&:hover': {
              color: theme.palette.secondary.main,
            },
          })}
        >
          Projects
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/contact"
          sx={(theme) => ({
            textTransform: 'none',
            marginLeft: theme.spacing(2),
            '&:hover': {
              color: theme.palette.secondary.main,
            },
          })}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;

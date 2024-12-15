import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, Container } from '@mui/material';
import theme from '../my-themes/theme-one'; // Import the external theme
import * as Pages from '../my-app-pages';
import * as Components from '../my-components';

const MyApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Automatically resets global styles */}
      <Router>
        <Components.TabTitle />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            margin: 0,
            padding: 0,
          }}
        >
          {/* App Bar spans the full width */}
          <Components.MyAppBar />

          {/* Main Content with Responsive Container */}
          <Box sx={{ flex: 1 }}>
            <Container
              maxWidth="xl" // Restricts content width
              sx={{
                padding: 0, // Removes Container's default l/r padding
              }}
            >
              <Routes>
                <Route path="/" element={<Pages.Home />} />
                <Route path="/about" element={<Pages.About />} />
                <Route path="/projects" element={<Pages.Projects />} />
                <Route path="/contact" element={<Pages.Contact />} />
              </Routes>
            </Container>
          </Box>

          {/* Footer spans the full width */}
          <Components.Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default MyApp;

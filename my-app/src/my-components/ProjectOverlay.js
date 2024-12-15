import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';

const ProjectOverlay = ({ project, onClose }) => {
  if (!project) return null; // Avoid rendering without a project

  return (
    <Box
      sx={(theme) => ({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
        zIndex: theme.zIndex.modal,
        overflowY: 'hidden', // Prevent scrolling unless content exceeds viewport
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(6),
        },
      })}
    >
      {/* Back Button */}
      <Button
        onClick={onClose}
        variant="contained"
        sx={(theme) => ({
          position: 'absolute',
          top: theme.spacing(2),
          left: theme.spacing(2),
        })}
      >
        Back
      </Button>

      {/* Content Section */}
      <Box
        sx={(theme) => ({
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: theme.spacing(2),
          textAlign: 'center',
        })}
      >
        {/* Project Name */}
        <Typography variant="h3" gutterBottom>
          {project.name}
        </Typography>

        {/* Project Description */}
        <Typography variant="body1" color="textSecondary">
          {project.longDescription}
        </Typography>
      </Box>

      {/* Divider */}
      <Divider sx={(theme) => ({ my: theme.spacing(4) })} />

      {/* Process Content */}
      <Box
        sx={(theme) => ({
          flexShrink: 0, // Prevents shrinking of this section
          padding: theme.spacing(2),
        })}
      >
        <Typography variant="h6" gutterBottom>
          Process Content
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Here’s where you can showcase your process for this project. Add images, details, or any other content you want.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectOverlay;

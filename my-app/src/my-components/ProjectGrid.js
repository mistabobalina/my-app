import React from 'react';
import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, onProjectClick }) => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 2,
        justifyContent: 'center',
      }}
    >
      {projects.map((project, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ProjectCard
            title={project.name}
            description={project.shortDescription}
            image={project.image}
            onClick={() => onProjectClick(project)} // Ensure this triggers the function
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectGrid;

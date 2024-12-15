import React, { useState } from 'react';
import { Grid, Container } from '@mui/material';
import ProjectCard from '../my-components/ProjectCard';
import ProjectOverlay from '../my-components/ProjectOverlay';
import projects from '../my-data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project); // Opens the overlay with the clicked project
  };

  const handleOverlayClose = () => {
    setSelectedProject(null); // Closes the overlay
  };

  return (
    <Container maxWidth="xl" sx={{ padding: 4 }}>
      {/* Project Cards Grid */}
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
          >
            <ProjectCard
              title={project.name}
              description={project.shortDescription}
              image={project.image}
              onClick={() => handleCardClick(project)} // Passes project data to overlay
            />
          </Grid>
        ))}
      </Grid>

      {/* Project Overlay */}
      {selectedProject && (
        <ProjectOverlay
          project={selectedProject} // Passes the selected project to the overlay
          onClose={handleOverlayClose} // Handles closing the overlay
        />
      )}
    </Container>
  );
};

export default Projects;

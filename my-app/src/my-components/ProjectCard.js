import React from 'react';
import BaseCard from './BaseCard';

const ProjectCard = ({ title, description, image, onClick, sx }) => {
  return (
    <BaseCard
      title={title}
      description={description}
      image={image}
      onClick={onClick}
      sx={sx} // Forward sx to BaseCard
    />
  );
};

export default ProjectCard;

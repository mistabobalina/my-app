import React from 'react';
import BaseCard from './BaseCard';

const HomeCard = ({ title, description, image, onClick, sx }) => {
  return (
    <BaseCard
      title={title}
      description={description}
      image={image}
      onClick={onClick}
      sx={sx} // Pass dynamic styles directly
    />
  );
};

export default HomeCard;

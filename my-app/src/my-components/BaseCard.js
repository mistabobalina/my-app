import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const BaseCard = ({ title, description, image, onClick, sx }) => {
  return (
    <Card
      onClick={onClick}
      sx={(theme) => ({
        cursor: onClick ? 'pointer' : 'default',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: theme.shadows[3],
        borderRadius: theme.shape.borderRadius,
        transition: theme.transitions.create(['box-shadow', 'transform'], {
          duration: theme.transitions.duration.short,
        }),
        '&:hover': {
          boxShadow: theme.shadows[6],
          transform: onClick ? 'scale(1.02)' : 'none',
        },
        ...(typeof sx === 'function' ? sx(theme) : sx || {}), // Safely merge `sx`
      })}
    >
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: 140,
            width: '100%',
            objectFit: 'cover',
          }}
        />
      )}
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BaseCard;

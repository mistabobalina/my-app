import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import HomeCard from '../my-components/HomeCard';

const Home = () => {
  const cards = [
    {
      title: 'Welcome to My Portfolio',
      description: 'Explore my work, journey, and skills in UX design and development.',
      image: 'https://via.placeholder.com/300x200', // Replace with an actual image
    },
    {
      title: 'Learn About Me',
      description: 'Discover my passion for creating meaningful user experiences.',
      image: 'https://via.placeholder.com/300x200', // Replace with an actual image
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={(theme) => ({
        paddingY: theme.spacing(4), // Vertical padding using theme spacing tokens
      })}
    >
      {/* Greeting Section */}
      <Typography variant="h3" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        I'm passionate about designing exceptional user experiences and creating
        solutions that matter. Take a look around!
      </Typography>

      {/* Cards Section */}
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <HomeCard
              title={card.title}
              description={card.description}
              image={card.image}
              onClick={() => console.log(`Clicked on ${card.title}`)} // Placeholder click handler
              sx={(theme) => ({
                boxShadow: theme.shadows[1],
                '&:hover': {
                  boxShadow: theme.shadows[3],
                },
              })}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;

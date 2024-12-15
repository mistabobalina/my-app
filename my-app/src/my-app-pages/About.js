import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        I’ve been a designer of experiences my entire life—long before I knew there was a name for it. Growing up in a home filled with fear and uncertainty, I learned to see the world differently. I discovered early on that systems, spaces, and interactions could either amplify chaos or create calm. So, I began to look for ways to bring order, peace, and connection wherever I could.
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        At 15, I landed my first job at a drivers’ education center. It was a small, crowded space with overlapping schedules, long lines, and frustrated students and parents. I didn’t just see the chaos—I saw the potential. I redesigned the classroom layout, created workflows for managing students and paperwork, and optimized processes for scheduling. It wasn’t just about making things run smoothly; it was about understanding how every detail impacted the people involved. Even then, I was practicing what I now know to be UX.
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        That experience wasn’t an anomaly—it was the start of a lifetime of solving problems for people. In every role I’ve held since, I’ve brought the same empathy, curiosity, and strategic thinking. Whether it was crafting elegant branding and visual design in my early career or building scalable design systems for a global enterprise, my focus has always been the same: to create systems that empower people and help them find clarity in complexity.
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Today, as a full-stack UX designer, I lead with this belief: everything is connected, and great design can uncover those connections to bring harmony to even the most tangled systems. At Coupa, I’ve modernized legacy enterprise systems, built a design system from the ground up, and helped teams adopt processes that make their work more efficient and impactful. I see design not just as a craft, but as a way to create peace in places where there was once friction.
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        My journey is unconventional, but it’s exactly what makes me the designer I am. I’ve been solving problems for as long as I can remember—not just for businesses, but for people. For their goals, their challenges, and their potential. My work isn’t just about pixels or processes; it’s about making life easier, more meaningful, and more human.
      </Typography>
    </Box>
  );
};

export default About;

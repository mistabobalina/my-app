const responsivePadding = (theme) => ({
    padding: theme.spacing(4), // Default padding
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(8),
    },
  });
  
  const responsiveTypography = (theme) => ({
    fontSize: {
      xs: '1.5rem', // Mobile
      sm: '2rem',   // Tablet
      md: '2.5rem', // Small desktop
      lg: '3rem',   // Large desktop
    },
  });
  
  export { responsivePadding, responsiveTypography };
  
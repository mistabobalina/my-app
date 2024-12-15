import { createTheme } from '@mui/material/styles';
import spacing from '../my-tokens/spacing';
import typography from '../my-tokens/typography';

const theme = createTheme({
  spacing: spacing.base, // Base spacing = 2px
  typography: typography.default,
  
  palette: {
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#000000', // Red
    },
    background: {
      default: '#f5f5f5', // Light gray
    },
    text: {
      primary: '#000', // Black
      secondary: '#555', // Dark gray
    },

    
  },

});

export default theme;

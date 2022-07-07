import { createTheme, Theme } from '@mui/material';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#AF7EEB',
    },
    secondary: {
      main: '#A659EE',
    },
    background: {
      default: '#E4E9FF',
    },
    action: {
      disabledBackground: '#E4E9FF',
    },
  },
});

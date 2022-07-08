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

export const scrollBarStyling = {
  "&::-webkit-scrollbar": {
    width: 15,
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 8px grey",
    borderRadius: 4
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#AF7EEB",
    borderRadius: 10
  }, 
}

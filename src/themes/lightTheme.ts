import { createTheme, Theme } from '@mui/material';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',

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
  typography: {
    caption: {
      fontFamily: 'Lato',
      lineHeight: 1.92,
    },
    fontWeightLight: 100,
    h1: {
      fontFamily: 'Lora',
      lineHeight: 1.15,
    },
    h2: {
      fontFamily: 'Lato',
    },
    button: {
      fontWeight: 600,
    },
  },
  //TODO: styleOverrides for all themes fontSize for task.name
  // components: {
  //   MuiTypography: {
  //     styleOverrides: {
  //       body2: {
  //         fontSize: '1.2rem'
  //       }
  //     }
    // }
  // }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#AF7EEB',
    },
    secondary: {
      main: '#A659EE',
    },
    background: {
      default: '#424242',
    },
    action: {
      disabledBackground: '#E4E9FF',
    },
  },
  typography: {
    caption: {
      fontFamily: 'Lato',
      lineHeight: 1.92,
    },
    fontWeightLight: 100,
    h1: {
      fontFamily: 'Lora',
      lineHeight: 1.15,
    },
    h2: {
      fontFamily: 'Lato',
    },
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#12121200'
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: '#AF7EEB'
        }
      }
    }
  }
});


export const scrollBarStyling = {
  "&::-webkit-scrollbar": {
    width: 15
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 8px grey",
    borderRadius: 4
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#AF7EEB",
    borderRadius: 10
  } 
};

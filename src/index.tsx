import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { darkTheme, lightTheme } from './themes/lightTheme';
import { useState } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
  const [ isDarkTheme, setIsDarkTheme ] = useState(false);

root.render(
  <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <CssBaseline />

    <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LocalizationProvider>
  </ThemeProvider>
);

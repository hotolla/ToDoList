import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { theme } from './config/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LocalizationProvider>
  </ThemeProvider>
);

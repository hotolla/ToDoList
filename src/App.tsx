import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoAppBar } from './components/TodoAppBar';
import { Main } from './components/Main';
import { TodoDetails } from './components/TodoDetails';
import { darkTheme, lightTheme } from './themes/lightTheme';
import { Layout } from './Layout';

function App() {
  const [ isDarkTheme, setIsDarkTheme ] = useState(false);
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <BrowserRouter>
          <Layout>
            <TodoAppBar onThemetoggle={() => setIsDarkTheme(isDarkTheme => !isDarkTheme)}/>

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/todo/:id" element={<TodoDetails />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;

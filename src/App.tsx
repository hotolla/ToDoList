import { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { TodoDetails } from './components/TodoDetails';
import { darkTheme, lightTheme } from './themes/lightTheme';
import { Layout } from './Layout';
import { Header } from './components/Header';
import i18next from 'i18next';

function App() {
  const [ isDarkTheme, setIsDarkTheme ] = useState(false);

  // const [ locale, setLocale ] = useState(i18next.language);
  // const currentTheme = useSelector(({ theme }) => theme.currentTheme);

  // useEffect(() => {
  //   const handleLanguageChange = () => {
  //     setLocale(i18next.language);
  //   };

  //   i18next.on('languageChanged', handleLanguageChange);

  //   return () => {
  //     i18next.off('languageChanged', handleLanguageChange);
  //   };
  // }, []);

  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <BrowserRouter>
          <Layout>
            <Header onThemetoggle={() => setIsDarkTheme(isDarkTheme => !isDarkTheme)}/>

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



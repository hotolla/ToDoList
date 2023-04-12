import { useCallback, useEffect, useState } from 'react';
import i18next from 'i18next';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TasksPage } from './app/TasksPage/TasksPage';
import { TodoDetails } from './components/TodoDetails';
import { darkTheme, lightTheme } from './themes/themes';
import { Layout } from './Layout';
import { Header } from './components/Header';
import { LoginPage } from './app/AuthPage/LoginPage';
import { Registration } from './app/AuthPage/Registration';
import { AuthGuard } from './components/AuthGuard';
import { AuthProvider } from './components/AuthProvider';

const isDarkThemeKey = 'isDarkTheme';

function App() {
  const [ isDarkTheme, setIsDarkTheme ] = useState(() => {
    return localStorage.getItem(isDarkThemeKey) === 'false';
  });
  const [ locale, setLocale ] = useState(i18next.language);

  const handleChangeTheme = useCallback(() => {
    setIsDarkTheme((isDarkTheme) => {
      localStorage.setItem(isDarkThemeKey, `${isDarkTheme}`);

      return !isDarkTheme;
    });
  }, [ isDarkTheme ]);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLocale(i18next.language);
    };

    i18next.on('languageChanged', handleLanguageChange);

    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />

      <LocalizationProvider dateAdapter={AdapterMoment} locale={locale}>
        <BrowserRouter>
          <AuthProvider>
            <Layout>
              <Header isDarkTheme={isDarkTheme} onThemeToggle={handleChangeTheme}  />

              <Routes>
                <Route path="/" element={<Navigate to="/todo" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/auth/registration" element={<Registration />} />

                <Route element={<AuthGuard />}>
                  <Route path="/todo" element={<TasksPage />} />
                  <Route path="/todo/:id" element={<TodoDetails />} />
                </Route>
              </Routes>
            </Layout>
          </AuthProvider>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;

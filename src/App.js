import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import AllRoutes from './routes';
import { ThemeButton } from './Styles';

import { lightTheme, darkTheme, GlobalStyles } from './theme';

const App = () => {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <ThemeButton onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              🌞 Light Mode
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              🌜 Dark Mode
            </span>
          )}
        </ThemeButton>
        <AllRoutes />
      </>
    </ThemeProvider>
  );
};

export default App;

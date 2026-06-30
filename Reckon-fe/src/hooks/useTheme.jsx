import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const theme = 'light';
  const setTheme = () => {};

  const [accent, setAccentState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('reckon-accent') || 'redblue';
    }
    return 'redblue';
  });

  const [masterTheme, setMasterThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('reckon-master-theme') || 'default';
    }
    return 'default';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
    localStorage.setItem('reckon-theme', 'light');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('accent-yellow', 'accent-blue', 'accent-pink', 'accent-orange', 'accent-green', 'accent-mono', 'accent-redblue', 'accent-violet', 'accent-ocean', 'accent-sunset');
    root.classList.add(`accent-${accent}`);
    localStorage.setItem('reckon-accent', accent);
  }, [accent]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(
      'master-default', 'master-emerald', 'master-midnight', 'master-rose', 'master-blue'
    );
    if (masterTheme !== 'default') {
      root.classList.add(`master-${masterTheme}`);
    }
    localStorage.setItem('reckon-master-theme', masterTheme);
  }, [masterTheme]);

  const toggleTheme = () => {};

  const setAccent = (newAccent) => {
    setAccentState(newAccent);
  };

  const setMasterTheme = (newMaster) => {
    setMasterThemeState(newMaster);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, accent, setAccent, masterTheme, setMasterTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

import { useState, useEffect } from 'react';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false;
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
};

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    const isDark = getInitialTheme();
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return { darkMode, toggleTheme };
};
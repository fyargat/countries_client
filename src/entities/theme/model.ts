import { useContext } from 'react';

import { localStorage } from '@/shared/lib/local-storage';

import { THEME_STORE_NAME, Theme } from './constants';
import { ThemeContext } from './context';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) throw new Error('context not provided');

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;

    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.set(THEME_STORE_NAME, newTheme);
  };

  return { theme, toggleTheme };
};

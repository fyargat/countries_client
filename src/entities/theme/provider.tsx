import { useEffect, useState } from 'react';

import { localStorage } from '@/shared/lib/local-storage';

import { THEME_STORE_NAME, Theme } from './constants';
import { ThemeContext } from './context';
import { ThemeType } from './types';

interface IProps {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(Theme.Light);

  const setThemeAfterMount = () => {
    const theme = localStorage.get<ThemeType>(THEME_STORE_NAME) ?? Theme.Light;

    setTheme(theme);
  };

  useEffect(() => {
    setThemeAfterMount();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

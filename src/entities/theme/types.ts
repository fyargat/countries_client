import { Dispatch, SetStateAction } from 'react';

import { Theme } from './constants';

export type ThemeType = `${Theme}`;

export interface IThemeContext {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

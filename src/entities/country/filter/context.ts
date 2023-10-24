import { createContext } from 'react';

import { IFiltersContext } from './types';

export const FiltersContext = createContext<IFiltersContext | null>(null);

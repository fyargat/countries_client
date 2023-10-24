import { createContext } from 'react';

import { ISearchContext } from './types';

export const SearchContext = createContext<ISearchContext | null>(null);

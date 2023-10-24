import { useContext } from 'react';

import { SearchContext } from './context';

export const useSearch = () => {
  const searchContext = useContext(SearchContext);

  if (!searchContext) throw new Error('context not provided');

  const { searchValue, setSearchValue } = searchContext;

  return { searchValue, setSearchValue };
};

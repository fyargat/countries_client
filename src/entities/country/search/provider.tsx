import { useState } from 'react';

import { SearchContext } from './context';

interface IProps {
  children: React.ReactNode;
}

export const SearchProvider: React.FC<IProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

import { useState } from 'react';

import { FiltersContext } from './context';
import { RegionOptionId } from './types';

interface IProps {
  children: React.ReactNode;
}

export const FiltersProvider: React.FC<IProps> = ({ children }) => {
  const [filter, setFilter] = useState<RegionOptionId | null>(null);

  return (
    <FiltersContext.Provider value={{ filter, setFilter }}>
      {children}
    </FiltersContext.Provider>
  );
};

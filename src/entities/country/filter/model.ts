import { useContext } from 'react';

import { RegionsMap } from './constants';
import { FiltersContext } from './context';

export const useFilters = () => {
  const filtersContext = useContext(FiltersContext);

  if (!filtersContext) throw new Error('context not provided');

  const { filter, setFilter } = filtersContext;

  const region = filter ? RegionsMap.get(filter) : null;

  return { filter, setFilter, region };
};

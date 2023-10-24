import { RegionsMap, useFilters } from '@/entities/country/filter';

export const useRegionSelect = () => {
  const { filter, setFilter } = useFilters();

  const fieldText = filter
    ? `Filter by ${RegionsMap.get(filter)?.value}`
    : 'Filter by Region';

  return { fieldText, onOptionSelect: setFilter, activeId: filter };
};

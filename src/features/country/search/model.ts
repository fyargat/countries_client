import { ChangeEvent, useEffect, useId, useState } from 'react';

import { useSearch } from '@/entities/country';

import { useDebounce } from '@/shared/lib/hooks/useDebounce';

export const useSearchInput = () => {
  const { searchValue, setSearchValue } = useSearch();
  const [value, setValue] = useState(searchValue ?? '');
  const debouncedValue = useDebounce(value, 500);

  const id = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim());
  };

  useEffect(() => {
    setSearchValue(debouncedValue);
  }, [debouncedValue, setSearchValue]);

  return {
    id,
    onChange: handleChange,
    value,
  };
};

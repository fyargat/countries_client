import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useCountryListQuery, useFilters, useSearch } from '@/entities/country';

export const useCountryList = () => {
  const { region } = useFilters();
  const { searchValue } = useSearch();

  const [listSpinnerRef, inView] = useInView({});

  const {
    isFetching,
    isFetchingNextPage,
    data,
    fetchNextPage,
    hasNextPage,
    isFetched,
  } = useCountryListQuery({
    region: region?.value.toLowerCase(),
    q: searchValue.toLowerCase(),
  });

  const countries = data?.pages ?? [];

  useEffect(() => {
    if (!inView) return;
    if (!hasNextPage) return;

    fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  const isVisibleSpinner = isFetching && !isFetchingNextPage;
  const isNotFound = !!searchValue && isFetched && !countries.length;

  return {
    isLoading: isVisibleSpinner,
    isNotFound,
    searchValue,
    countries,
    hasNextPage,
    listSpinnerRef,
  };
};

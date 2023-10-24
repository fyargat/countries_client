import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import {
  CountryControllerGetListParams,
  fetchCountry,
  fetchCountryList,
} from '@/shared/api/generated';

const countryListKey = ['country-list'] as unknown[];
const countryKey = ['country'] as unknown[];

export const useCountryListQuery = ({
  q,
  region,
}: CountryControllerGetListParams) => {
  return useInfiniteQuery({
    queryKey: countryListKey.concat([{ q, region }]),
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetchCountryList({
        q,
        region,
        page: pageParam,
      });

      return response;
    },
    select: ({ pages, pageParams }) => {
      const data = pages.map((page) => page.data).flat();

      return { pages: data, pageParams };
    },
    getNextPageParam: (lastPage) => {
      return lastPage.meta.next;
    },
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });
};

export const useCountryQuery = (id: string) => {
  return useQuery({
    queryKey: [`${countryKey}:${id}`],
    queryFn: () => fetchCountry(id),
    enabled: Boolean(id),
    staleTime: 5 * 60 * 1000,
  });
};

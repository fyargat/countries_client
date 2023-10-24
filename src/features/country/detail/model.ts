import { useParams } from 'next/navigation';

import { useCountryQuery } from '@/entities/country';

type IParams = {
  id: string;
};

export const useCountryDetailContent = () => {
  const params = useParams() as IParams;

  const { data, isFetching } = useCountryQuery(params?.id);

  return { data, isFetching };
};

import { Header } from '@/widgets/header';

import { UIPageLayout } from '@/shared/ui/layouts/ui-page-layout';

import { CountryDetailMain } from './ui';

interface IProps {}

export const CountryDetail: React.FC<IProps> = () => {
  return <UIPageLayout header={<Header />} main={<CountryDetailMain />} />;
};

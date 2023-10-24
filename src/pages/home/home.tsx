import { Header } from '@/widgets/header';

import { UIPageLayout } from '@/shared/ui/layouts/ui-page-layout';

import { HomeMain } from './ui';

interface IProps {}

export const Home: React.FC<IProps> = () => {
  return <UIPageLayout header={<Header />} main={<HomeMain />} />;
};

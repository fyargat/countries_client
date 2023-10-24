import { FC } from 'react';

import { CountryList, RegionSelect, SearchInput } from '@/features/country';
import { ScrollToTopButton } from '@/features/scroll-to-top';

import styles from './home-main.module.scss';

interface IProps {}

export const HomeMain: FC<IProps> = () => {
  return (
    <main className={styles.container}>
      <div className={styles.controls}>
        <SearchInput />
        <RegionSelect />
      </div>

      <CountryList />
      <ScrollToTopButton />
    </main>
  );
};

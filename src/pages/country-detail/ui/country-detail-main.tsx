import { FC } from 'react';

import { BackToListLink } from '@/features/back-to-list';
import { CountryDetailContent } from '@/features/country';

import styles from './country-detail-main.module.scss';

interface IProps {}

export const CountryDetailMain: FC<IProps> = () => {
  return (
    <main className={styles.container}>
      <div className={styles.backToList}>
        <BackToListLink />
      </div>

      <CountryDetailContent />
    </main>
  );
};

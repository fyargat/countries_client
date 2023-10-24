import { FC } from 'react';

import { UIListSpinner } from '@/shared/ui/spinner/ui-list-spinner';
import { UISpinner } from '@/shared/ui/spinner/ui-spinner';

import { useCountryList } from '../../model';
import { CountryCard } from '../country-card';
import styles from './country-list.module.scss';

interface IProps {}

export const CountryList: FC<IProps> = () => {
  const {
    isLoading,
    isNotFound,
    searchValue,
    countries,
    hasNextPage,
    listSpinnerRef,
  } = useCountryList();

  if (isLoading) {
    return (
      <div className={styles.spinner}>
        <UISpinner />
      </div>
    );
  }

  if (isNotFound) {
    return (
      <p
        className={styles.notFound}
      >{`Country «${searchValue}» not found :(`}</p>
    );
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {countries.map((country) => (
          <li key={country.id}>
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
      {hasNextPage && (
        <div ref={listSpinnerRef} className={styles.listSpinner}>
          <UIListSpinner />
        </div>
      )}
    </div>
  );
};

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { formatPopulation } from '@/entities/country';

import { CountryShort } from '@/shared/api/generated';

import { IMAGE_PLACEHODLER } from '../../constants';
import styles from './country-card.module.scss';

interface IProps {
  country: CountryShort;
}

export const CountryCard: FC<IProps> = ({ country }) => {
  return (
    <Link href={`/country/${country.id}`}>
      <div className={styles.container}>
        <div className={styles.flag}>
          <Image
            src={country.flag}
            width={330}
            height={200}
            alt={`Flag of ${country.name}`}
            loading='lazy'
            placeholder={IMAGE_PLACEHODLER}
          />
        </div>
        <div className={styles.body}>
          <h3 title={country.name} className={styles.title}>
            {country.name}
          </h3>
          <div>
            <p className={styles.text}>
              <span className={styles.textBold}>Population:</span>{' '}
              {formatPopulation(country.population)}
            </p>
            <p className={styles.text}>
              <span className={styles.textBold}>Region:</span> {country.region}
            </p>
            <p className={styles.text}>
              <span className={styles.textBold}>Capital:</span>{' '}
              {country.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

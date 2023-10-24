import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { GoToCountryLink } from '@/features/go-to-country';

import { formatPopulation } from '@/entities/country/lib/format';

import { Border } from '@/shared/api/generated';
import { UISpinner } from '@/shared/ui/spinner/ui-spinner';

import { IMAGE_PLACEHOLDER } from '../constants';
import { useCountryDetailContent } from '../model';
import styles from './country-detail-content.module.scss';

interface IProps {}

export const CountryDetailContent: FC<IProps> = () => {
  const { data, isFetching } = useCountryDetailContent();

  if (isFetching) {
    return (
      <div className={styles.spinner}>
        <UISpinner />
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className={styles.content}>
      <div className={styles.flag}>
        <Image
          width={600}
          height={400}
          src={data?.flag!}
          alt={`Flag of ${data?.name}`}
          placeholder={IMAGE_PLACEHOLDER}
          loading='lazy'
        />
      </div>

      <div className={styles.info}>
        <h1 className={styles.title}>{data?.name}</h1>

        <div className={styles.text}>
          <TextBlock className={styles.textBlockFirst}>
            <TextRow title='Native Name' text={data?.nativeName} />
            <TextRow
              title='Population'
              text={formatPopulation(data?.population!)}
            />
            <TextRow title='Region' text={data?.region} />
            <TextRow title='Sub Region' text={data?.subregion} />
            <TextRow title='Capital' text={data?.capital} />
          </TextBlock>

          <TextBlock>
            <TextRow title='Top Level Domain' text={data?.topLevelDomain} />

            <TextRow
              title='Currencies'
              text={data?.currencies?.map((v) => v.name)}
            />

            <TextRow
              title='Languages'
              text={data?.languages?.map((v) => v.name)}
            />
          </TextBlock>
        </div>

        <BorderBlock borders={data?.borders} />
      </div>
    </div>
  );
};

const TextBlock = ({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <div className={cn(styles.textBlock, className)}>{children}</div>;

const TextRow = ({
  title,
  text,
}: {
  title: string;
  text?: string | string[];
}) => {
  if (!text) {
    return null;
  }

  const textContent = Array.isArray(text)
    ? text.map((value, index) => (
        <span key={index}>
          {'  '}
          {index !== text?.length! - 1 ? `${value},` : value}
        </span>
      ))
    : text;

  return (
    <p className={styles.textRow}>
      <span className={styles.textRowBold}>{title}:</span> {textContent}
    </p>
  );
};

const BorderBlock = ({ borders = [] }: { borders?: Border[] }) => {
  if (!borders?.length) return null;

  return (
    <div className={styles.border}>
      <h3 className={styles.borderTitle}>Border Countries:</h3>
      <ul className={styles.borderList}>
        {borders?.map((border) => (
          <li key={border.id} className={styles.borderItem}>
            <GoToCountryLink
              text={border.name}
              href={`/country/${border.id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

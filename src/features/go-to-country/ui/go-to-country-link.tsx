import Link from 'next/link';
import { FC } from 'react';

import styles from './go-to-country-link.module.scss';

interface IProps {
  text: string;
  href: string;
}

export const GoToCountryLink: FC<IProps> = ({ href, text }) => {
  return (
    <Link href={href} title={text} className={styles.container}>
      <span className={styles.truncate}>{text}</span>
    </Link>
  );
};

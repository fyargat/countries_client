import { FC } from 'react';

import styles from './ui-list-spinner.module.scss';

interface IProps {}

export const UIListSpinner: FC<IProps> = () => {
  return <div className={styles.loader} />;
};

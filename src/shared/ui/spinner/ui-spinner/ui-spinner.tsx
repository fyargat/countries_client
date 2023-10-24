import cn from 'classnames';
import { FC } from 'react';

import styles from './ui-spinner.module.scss';

interface IProps {}

export const UISpinner: FC<IProps> = () => {
  return (
    <div className={styles.spinner}>
      <div className={cn(styles.rhombus, styles.child1)} />
      <div className={cn(styles.rhombus, styles.child2)} />
      <div className={cn(styles.rhombus, styles.child3)} />
      <div className={cn(styles.rhombus, styles.child4)} />
      <div className={cn(styles.rhombus, styles.child5)} />
      <div className={cn(styles.rhombus, styles.child6)} />
      <div className={cn(styles.rhombus, styles.child7)} />
      <div className={cn(styles.rhombus, styles.child8)} />
      <div className={cn(styles.rhombus, styles.big)} />
    </div>
  );
};

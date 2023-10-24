import { FC } from 'react';

import { useScrollToTop } from '../model';
import styles from './scroll-to-top-button.module.scss';

interface IProps {}

export const ScrollToTopButton: FC<IProps> = () => {
  const { isVisible, onScrollToTop } = useScrollToTop();

  return (
    <>
      {isVisible && (
        <button
          className={styles.container}
          onClick={onScrollToTop}
          aria-label='Scroll to Top'
        >
          <span>
            <UpArrowIcon />
          </span>
        </button>
      )}
    </>
  );
};

const UpArrowIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='800px'
    width='800px'
    version='1.1'
    id='Layer_1'
    viewBox='0 0 330.002 330.002'
    fill='currentColor'
  >
    <path
      id='XMLID_105_'
      d='M324.001,209.25L173.997,96.75c-5.334-4-12.667-4-18,0L6.001,209.25c-6.627,4.971-7.971,14.373-3,21  c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001L164.998,127.5l141.003,105.75c6.629,4.972,16.03,3.627,21-3  C331.972,223.623,330.628,214.221,324.001,209.25z'
    />
  </svg>
);

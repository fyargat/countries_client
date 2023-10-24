import cn from 'classnames';
import { FC } from 'react';

import { useUISelect } from './model';
import { Option, OptionId } from './types';
import styles from './ui-select.module.scss';

interface IProps {
  options: Option[];
  activeId: OptionId | null;
  fieldText: string;
  onOptionSelect: (id: OptionId) => void;
}

export const UISelect: FC<IProps> = ({
  options,
  activeId,
  fieldText,
  onOptionSelect,
}) => {
  const { containerRef, toggle, isVisible, select } =
    useUISelect(onOptionSelect);

  return (
    <div className={styles.container} ref={containerRef}>
      <button className={styles.field} onClick={toggle}>
        <p>{fieldText}</p>

        <div
          className={cn(styles.arrow, {
            [styles.arrowReverse]: isVisible,
          })}
        >
          <ArrowIcon />
        </div>
      </button>

      {isVisible && (
        <ul className={styles.list}>
          {options.map((option) => (
            <li
              key={option.id}
              className={cn(styles.item, {
                [styles.itemActive]: activeId === option.id,
              })}
            >
              <button
                disabled={activeId === option.id}
                className={styles.itemButton}
                onClick={select(option.id)}
              >
                {option.value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ArrowIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='{1.5}'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
    />
  </svg>
);

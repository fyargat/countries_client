import { useTheme } from '@/entities/theme';
import { Theme } from '@/entities/theme/constants';

import styles from './update-theme-button.module.scss';

interface IProps {}

export const UpdateThemeButton: React.FC<IProps> = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === Theme.Dark;
  const isLight = theme === Theme.Light;

  return (
    <div>
      <button className={styles.button} onClick={toggleTheme}>
        <div className={styles.icon}>
          {isDark && <MoonSolid className={styles.iconSolid} />}
          {isLight && <MoonOutline className={styles.iconOutline} />}
        </div>
        {isDark ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

const MoonSolid = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <path
      fillRule='evenodd'
      d='M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z'
      clipRule='evenodd'
    />
  </svg>
);

const MoonOutline = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
    />
  </svg>
);

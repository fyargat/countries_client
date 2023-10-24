import styles from './ui-header.module.scss';

interface IProps {
  right: React.ReactNode;
}

export const UIHeader: React.FC<IProps> = ({ right }) => {
  return (
    <header className={styles.background}>
      <div className='wrap'>
        <div className={styles.container}>
          <h1 className={styles.title}>Where in the world?</h1>
          {right}
        </div>
      </div>
    </header>
  );
};

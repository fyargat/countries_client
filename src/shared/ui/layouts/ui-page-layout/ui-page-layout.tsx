interface IProps {
  header: React.ReactNode;
  main: React.ReactNode;
}

export const UIPageLayout: React.FC<IProps> = ({ header, main }) => {
  return (
    <div>
      {header}
      <div className='wrap'>{main}</div>
    </div>
  );
};

import { UpdateThemeButton } from '@/features/update-theme';

import { UIHeader } from '@/shared/ui/ui-header';

interface IProps {}

export const Header: React.FC<IProps> = () => {
  return <UIHeader right={<UpdateThemeButton />} />;
};

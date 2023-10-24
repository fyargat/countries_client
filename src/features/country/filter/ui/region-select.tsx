import { FC } from 'react';

import { REGIONS } from '@/entities/country/filter';

import { UISelect } from '@/shared/ui/ui-select';

import { useRegionSelect } from '../model';

interface IProps {}

export const RegionSelect: FC<IProps> = () => {
  const { fieldText, onOptionSelect, activeId } = useRegionSelect();

  return (
    <UISelect
      activeId={activeId}
      options={REGIONS}
      onOptionSelect={onOptionSelect}
      fieldText={fieldText}
    />
  );
};

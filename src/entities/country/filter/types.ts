import { Dispatch, SetStateAction } from 'react';

import { Option } from '@/shared/ui/ui-select/types';

import { Region } from './constants';

export type RegionType = `${Region}`;

export type RegionOptionId = number;

export interface RegionOption extends Option {
  id: RegionOptionId;
  value: RegionType;
}

export interface IFiltersContext {
  filter: RegionOptionId | null;
  setFilter: Dispatch<SetStateAction<RegionOptionId | null>>;
}

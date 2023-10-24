import { RegionOption } from './types';

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export const REGIONS: RegionOption[] = [
  {
    id: 1,
    value: Region.Africa,
  },
  {
    id: 2,
    value: Region.Americas,
  },
  {
    id: 3,
    value: Region.Asia,
  },
  {
    id: 4,
    value: Region.Europe,
  },
  {
    id: 5,
    value: Region.Oceania,
  },
];

export const RegionsMap = new Map(REGIONS.map((region) => [region.id, region]));

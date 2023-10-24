/**
 * Generated by orval v6.19.1 🍺
 * Do not edit manually.
 * Countries
 * Description
 * OpenAPI spec version: 1.0
 */
import { createInstance } from './api-instance';

export type CountryControllerGetListParams = {
  page?: number;
  q?: string;
  region?: string;
};

export interface Border {
  id: number;
  name: string;
}

export interface Currency {
  code: string;
  id: number;
  name: string;
  symbol: string;
}

export interface Language {
  id: number;
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Country {
  alpha2Code: string;
  alpha3Code: string;
  area: number;
  borders: Border[];
  capital: string;
  currencies: Currency[];
  flag: string;
  id: number;
  languages: Language[];
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
}

export type ResponseMetaPrev = { [key: string]: any };

export type ResponseMetaNext = { [key: string]: any };

export interface ResponseMeta {
  currentPage: number;
  lastPage: number;
  next: ResponseMetaNext;
  perPage: number;
  prev: ResponseMetaPrev;
  total: number;
}

export interface ResponseData {
  capital: string;
  flag: string;
  id: number;
  name: string;
  population: number;
  region: string;
}

export interface GetListResponse {
  data: ResponseData[];
  meta: ResponseMeta;
}

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

export const fetchCountryList = (
  params?: CountryControllerGetListParams,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<GetListResponse>(
    { url: `/api/country`, method: 'get', params },
    options,
  );
};

export const fetchCountry = (
  id: number,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<Country>(
    { url: `/api/country/${id}`, method: 'get' },
    options,
  );
};

export type CountryControllerGetListResult = NonNullable<
  Awaited<ReturnType<typeof fetchCountryList>>
>;
export type CountryControllerGetCountryResult = NonNullable<
  Awaited<ReturnType<typeof fetchCountry>>
>;
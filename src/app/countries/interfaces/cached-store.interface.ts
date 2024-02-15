import { Country } from './countries-response-interface';
import { Region } from './region.type';

export interface TermCountries {
  term: string;
  countries: Country[];
}

export interface RegionCountries {
  term: Region;
  countries: Country[];
}

export interface CachedStore {
  capital: TermCountries;
  name: TermCountries;
  region: RegionCountries;
}

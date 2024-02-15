import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import {
  Country,
  CountryDetails,
} from '../interfaces/countries-response-interface';

type SearchType = 'name' | 'capital' | 'region';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private httpClient: HttpClient) {}

  private baseApiUrl: string = 'https://restcountries.com/v3.1';

  public countries: Country[] = [];
  public countryDetails: CountryDetails | null = null;

  public searchTermByType(
    term: string,
    type: SearchType
  ): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${this.baseApiUrl}/${type}/${term}`)
      .pipe(catchError(() => of([])));
  }

  public searchDetailsByCode(code: string): Observable<CountryDetails | null> {
    return this.httpClient
      .get<CountryDetails[]>(`${this.baseApiUrl}/alpha/${code}`)
      .pipe(
        map((countries) => (Array.isArray(countries) ? countries[0] : null)),
        catchError(() => of(null))
      );
  }

  public get countriesList(): Country[] {
    return this.countries;
  }

  public set countriesList(countries: Country[]) {
    this.countries = countries;
  }

  public get countryDetailsInfo(): CountryDetails | null {
    return this.countryDetails;
  }
}

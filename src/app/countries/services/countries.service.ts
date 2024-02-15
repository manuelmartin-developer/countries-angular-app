import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, tap } from 'rxjs';

import {
  Country,
  CountryDetails,
} from '../interfaces/countries-response-interface';
import { CachedStore } from '../interfaces/cached-store.interface';

type SearchType = 'name' | 'capital' | 'region';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private httpClient: HttpClient) {
    this._getFromLocalStorage();
  }

  private _baseApiUrl: string = 'https://restcountries.com/v3.1';

  public countries: Country[] = [];
  public countryDetails: CountryDetails | null = null;

  public cachedStore: CachedStore = {
    capital: { term: '', countries: [] },
    name: { term: '', countries: [] },
    region: { term: '', countries: [] },
  };

  public searchTermByType(
    term: string,
    type: SearchType
  ): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${this._baseApiUrl}/${type}/${term}`)
      .pipe(
        tap((countries) => {
          this.cachedStore[type].countries = countries;
          this.cachedStore[type].term = term;
        }),
        tap(() => this._saveToLocalStorage()),
        catchError(() => of([]))
      );
  }

  public searchDetailsByCode(code: string): Observable<CountryDetails | null> {
    return this.httpClient
      .get<CountryDetails[]>(`${this._baseApiUrl}/alpha/${code}`)
      .pipe(
        map((countries) => (Array.isArray(countries) ? countries[0] : null)),
        catchError(() => of(null))
      );
  }

  private _saveToLocalStorage(): void {
    localStorage.setItem('cachedStore', JSON.stringify(this.cachedStore));
  }
  private _getFromLocalStorage(): void {
    if (!localStorage.getItem('cachedStore')) return;

    this.cachedStore = JSON.parse(localStorage.getItem('cachedStore')!);
  }
}

import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries-response-interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  constructor(private countriesService: CountriesService) {}

  public countries: Country[] = [];

  public searchByCountry(term: string): void {
    this.countriesService
      .searchTermByType(term, 'name')
      .subscribe((countries) => {
        this.countries = countries;
      });
  }
}

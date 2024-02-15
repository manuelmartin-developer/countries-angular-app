import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries-response-interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  constructor(private countriesService: CountriesService) {}

  public countries: Country[] = [];

  public searchByCapital(term: string): void {
    this.countriesService
      .searchTermByType(term, 'capital')
      .subscribe((countries) => {
        this.countries = countries;
      });
  }
}

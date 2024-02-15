import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries-response-interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  constructor(private countriesService: CountriesService) {}

  public countries: Country[] = [];

  public searchByRegion(term: string): void {
    this.countriesService
      .searchTermByType(term, 'region')
      .subscribe((countries) => {
        this.countries = countries;
      });
  }
}

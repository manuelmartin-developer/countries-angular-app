import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries-response-interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
    `
      h2 {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    `,
  ],
})
export class ByRegionPageComponent {
  constructor(private countriesService: CountriesService) {}

  public countries: Country[] = [];
  public isLoading: boolean = false;

  public searchByRegion(term: string): void {
    this.isLoading = true;
    this.countriesService
      .searchTermByType(term, 'region')
      .subscribe((countries) => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}

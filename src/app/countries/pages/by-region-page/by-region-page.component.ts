import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries-response-interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: `
      h2 {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
      }
    `,
})
export class ByRegionPageComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cachedStore.region.countries;
    this.activeRegion = this.countriesService.cachedStore.region.term;
  }

  public countries: Country[] = [];
  public regions: Region[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];
  public activeRegion?: Region = undefined;
  public isLoading: boolean = false;

  public searchByRegion(region: Region): void {
    if (region === this.activeRegion) {
      return;
    }

    this.isLoading = true;
    this.activeRegion = region;
    this.countriesService
      .searchTermByType(region, 'region')
      .subscribe((countries) => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}

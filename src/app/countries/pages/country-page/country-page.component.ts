import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import {
  CountryDetails,
  Translation,
} from '../../interfaces/countries-response-interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  public countryDetails?: CountryDetails;
  public countryNameTranslations: Translation[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchDetailsByCode(id))
      )
      .subscribe((countryDetails: CountryDetails | null) => {
        if (!countryDetails) return this.router.navigateByUrl('/countries');
        this.countryNameTranslations = Object.values(
          countryDetails.translations
        );
        return (this.countryDetails = countryDetails);
      });
  }
}

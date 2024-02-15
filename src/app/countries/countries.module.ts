import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { SearchBoxComponent } from '../shared/components/search-box/search-box.component';
import { CountryTableComponent } from './components/countryTable/countryTable.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    SearchBoxComponent,
    CountryTableComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule],
})
export class CountriesModule {}

import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries-response-interface';

@Component({
  selector: 'countries-country-table',
  templateUrl: './countryTable.component.html',
  styleUrls: ['./countryTable.component.css'],
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}

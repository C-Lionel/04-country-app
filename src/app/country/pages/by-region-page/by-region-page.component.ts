import { Component, signal } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries.interface';
import { CountryListComponent } from '../../components/country-list/country-list.component';


@Component({
  selector: 'app-by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent {
  countries = signal<RESTCountry[]>([])
}

import { Component } from '@angular/core';

import {
  CountryResponse,
  CountryError,
} from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  termino: string = '';
  hasError: boolean = false;
  countries: CountryResponse[] = [];
  suggestedCountries: CountryResponse[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.hasError = false;
    this.showSuggestions = false;

    this.countryService.searchCountry(this.termino).subscribe({
      next: (v: CountryResponse[]) => {
        this.countries = v;
      },
      error: (e: CountryError) => {
        this.hasError = true;
      },
    });
  }

  suggestions(termino: string) {
    this.showSuggestions = true;
    this.termino = termino;

    this.countryService.searchCountry(termino).subscribe((countries) => {
      this.suggestedCountries = countries.splice(0, 5);
    });
  }

  searchSuggestion(termino: string) {
    this.buscar(termino);
  }
}

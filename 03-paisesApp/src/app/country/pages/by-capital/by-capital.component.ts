import { Component } from '@angular/core';

import {
  CountryError,
  CountryResponse,
} from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css'],
})
export class ByCapitalComponent {
  termino: string = '';
  hasError: boolean = false;
  countries: CountryResponse[] = [];

  constructor(private countryService: CountryService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.hasError = false;

    this.countryService.searchByCapital(this.termino).subscribe({
      next: (v: CountryResponse[]) => {
        this.countries = v;
      },
      error: (e: CountryError) => {
        this.hasError = true;
      },
    });
  }
}

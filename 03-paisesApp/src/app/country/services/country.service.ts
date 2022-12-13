import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CountryResponse } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountry(termino: string): Observable<CountryResponse[]> {
    const url = `${this._apiUrl}/name/${termino}`;

    return this.http.get<CountryResponse[]>(url);
  }

  searchByCapital(termino: string): Observable<CountryResponse[]> {
    const url = `${this._apiUrl}/capital/${termino}`;

    return this.http.get<CountryResponse[]>(url);
  }

  getCountryByAlpha(id: string): Observable<CountryResponse> {
    const url = `${this._apiUrl}/alpha/${id}`;

    return this.http.get<CountryResponse>(url);
  }

  searchRegion(region: string): Observable<CountryResponse[]> {
    const url = `${this._apiUrl}/region/${region}`;

    return this.http.get<CountryResponse[]>(url);
  }
}

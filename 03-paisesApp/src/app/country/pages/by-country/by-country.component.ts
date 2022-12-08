import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  termino: string = 'Hola mundo';

  buscar() {
    console.log(this.termino);
  }
}

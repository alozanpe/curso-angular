import { Component } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countryList: CountryResponse[] = [];

  constructor(private countryService: CountryService) {}

  activateRegion(region: string) {
    if (region !== this.activeRegion) {
      this.countryList = [];
      this.activeRegion = region;

      this.countryService.searchRegion(region).subscribe((countries) => {
        this.countryList = countries;
      });
    }
  }
}

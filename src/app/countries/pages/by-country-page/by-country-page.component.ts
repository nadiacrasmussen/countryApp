import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../service/contries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.scss'
})
export class ByCountryPageComponent implements OnInit{
  public countries : Country[] =[];
  public initialValue:string='';
  constructor(private conuntriesService : CountriesService){}


  ngOnInit(): void {
    this.countries = this.conuntriesService.cacheStore.byCountries.countries;
    this.initialValue = this.conuntriesService.cacheStore.byCountries.term;
  }

  seachByCountry(term:string):void{
    this.conuntriesService.searchCountry(term)
    .subscribe(countries =>{
      this.countries =countries;
    })
  }
}

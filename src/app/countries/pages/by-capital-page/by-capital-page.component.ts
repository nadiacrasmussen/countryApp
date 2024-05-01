import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../service/contries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',

})
export class ByCapitalPageComponent  implements OnInit{

  public countries : Country[] =[];
  public isLoading : boolean =false;
  public initialValue:string='';

constructor(private conuntriesService : CountriesService){}

ngOnInit(): void {
  this.countries = this.conuntriesService.cacheStore.byCapital.countries;
  this.initialValue = this.conuntriesService.cacheStore.byCapital.term;
}

  seachByCapital(term:string):void{
    this.isLoading=true;
  this.conuntriesService.searchCapital(term)
  .subscribe(countries =>{
    this.countries =countries;
    this.isLoading = false;
  })
}
}

import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../service/contries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss'
})
export class ByRegionPageComponent implements OnInit{

  public countries : Country[] =[];
public regions :Region[] =['Africa','America','Europe','Oceania','Asia'];
public selectedRegion?:Region;

  constructor(private conuntriesService : CountriesService){}

ngOnInit():void{
  this.countries = this.conuntriesService.cacheStore.byRegion.countries;
  this.selectedRegion = this.conuntriesService.cacheStore.byRegion.region
}



  seachByRegion(region:Region):void{
    this.selectedRegion =region;
    this.conuntriesService.searchRegion(region)
    .subscribe(countries =>{
      this.countries =countries;
    })
  }
}

import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit,OnDestroy{

  private debouncer = new Subject<string>
  private debouncerSubscription?:Subscription;


  ngOnInit(): void {
   this.debouncerSubscription = this.debouncer
   .pipe(
  debounceTime(300)
).subscribe(value =>{
  this.onDebounce.emit(value)
});

 }
 ngOnDestroy(): void {
  this.debouncerSubscription?.unsubscribe()

 }
@Input()
public placeholder :string='';

@Input()
public initialValue :string='';

@Output()
public onValue = new EventEmitter<string>();

@Output()
public onDebounce = new EventEmitter<string>();

emitValue(value:string) :void{
  this.onValue.emit(value);
}
onKeyPress( searchTerm :string){
  this.debouncer.next(searchTerm);
}

}

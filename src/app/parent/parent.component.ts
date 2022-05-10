import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryPickerService, ICountry } from 'ngx-country-picker';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {


  public countries: ICountry[] = [];

  public items = ['item1', 'item2', 'item3', 'item4'];
  public value: boolean = false;
  childNotifier: Subject<boolean> = new Subject<boolean>();
  
  @Output() toChild = new EventEmitter<any>();

  eventsSubject: Subject<any> = new Subject<any>();
  
  constructor(protected countryPicker: CountryPickerService) { }

  ngOnInit(): void {
    this.countryPicker.getCountries()
      .subscribe((countries: ICountry[]) => this.countries = countries);
  }

  notifyChild() {
    this.value = !this.value;
    this.childNotifier.next(this.value);
  }

  addItem(newItem: string) {
    console.log('New Item : ', newItem);
    this.items.push(newItem);
  }

  getSubscription(item: string) {
    //this.items.push(newItem);
    console.log('New Item : ', item);
    if (item !== null && item !== undefined && item !== "") {
      this.eventsSubject.next('From Parent');
    }
  }

}

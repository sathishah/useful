import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Subject, BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() testSubscribe = new EventEmitter<any>();

  @Input() notifier: Subject<boolean>;
  
  //public eventsSubject: Subject<void> = new Subject<void>();

  @Input() updatedEvent: Observable<void>;
  private eventsSubscription: Subscription;


  public value: boolean;
  public response: any = 'Before';

  constructor() { }

  ngOnInit(): void {
    this.notifier.subscribe(data => this.value = data);
    this.eventsSubscription = this.updatedEvent.subscribe((data) => this.doSomething(data))
  }

  addNewItem(value: string) {
    console.log("You Came to Child with Value : ", value);
    this.newItemEvent.emit(value);
  }

  doSomething(data: any) {
    console.log("I'm from Parent : ", data);
  }

  getSubscription(): any {
    var self = this;
    setTimeout(() => {
      self.response = 'Testing 123';
      self.testSubscribe.emit(self.response);
    }, 5000);
  }

  getSubscriberDetails(value: string) {
    console.log("You Came to Child with Value : ", value);
    this.getSubscription();
  }
}

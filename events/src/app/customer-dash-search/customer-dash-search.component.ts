import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';


@Component({
  selector: 'app-customer-dash-search',
  templateUrl: './customer-dash-search.component.html',
  styleUrls: ['./customer-dash-search.component.css']
})
export class CustomerDashSearchComponent implements OnInit {
  events: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    console.log(this.events);
}

}

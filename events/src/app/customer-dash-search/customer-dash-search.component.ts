import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';


@Component({
  selector: 'app-customer-dash-search',
  templateUrl: './customer-dash-search.component.html',
  styleUrls: ['./customer-dash-search.component.css']
})
export class CustomerDashSearchComponent implements OnInit {
  events: string[] = [];
  max = 20000;
  min = 0;
  step = 1;
  value = 0;
  vertical = false;
  constructor() { }

  ngOnInit() {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    console.log(this.events);
  }

  sliderVal(e){
    this.value = e.value;
  }

  

}

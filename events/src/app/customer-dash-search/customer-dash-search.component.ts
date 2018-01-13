import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { EventService } from './../event.service';


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
  constructor(private service: EventService) {
      service.getLocations().subscribe((result) => {  
          console.log(result.json());
      });
      
   }

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

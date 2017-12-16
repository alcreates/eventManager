import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  events: string[] = [];
  myState = 'NY';
  numberOfGuest;
  states = [{code: 'NY', name: 'New York City'}, {code: 'NJ', name: 'New Jersey'}, {code: 'Conn', name: 'Connecticut'}];
  constructor() {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
      this.events.push(`${type}: ${event.value}`);
      console.log(this.events);
  }
  submitSearch() {
     const post = {
        eventDate : this.events,
        location: this.myState,
        numberOfGuest: this.numberOfGuest
     };
      console.log(post);
  }
  ngOnInit() {
  }

}

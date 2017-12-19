import { Component, OnInit } from '@angular/core';
import { VenueService } from './../venue.service';

@Component({
  selector: 'app-customer-dash-results',
  templateUrl: './customer-dash-results.component.html',
  styleUrls: ['./customer-dash-results.component.css']
})
export class CustomerDashResultsComponent implements OnInit {

  venues;
  constructor(private auth: VenueService) {
    this.auth.getFeatured().subscribe(venues => {
        this.venues = venues.json();
        console.log(this.venues);
    });
  }

  ngOnInit() {
  }

}

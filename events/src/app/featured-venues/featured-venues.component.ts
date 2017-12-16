import { VenueService } from './../venue.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-venues',
  templateUrl: './featured-venues.component.html',
  styleUrls: ['./featured-venues.component.css']
})
export class FeaturedVenuesComponent implements OnInit {
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

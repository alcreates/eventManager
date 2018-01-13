import { VenueService } from './../venue.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {
  venues;
  selected = "Venues"
  constructor(private service: VenueService) {
      this.service.getFeatured().subscribe(venues => {
          this.venues = venues.json();
          console.log(this.venues);
      });

   }

   selectedVenue(e){
       
        this.selected = e;
   }

  ngOnInit() {
  }

}

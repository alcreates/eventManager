import { VenueService } from './../venue.service';
import { Component, OnInit , Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {
  venues;
  selected = "Venues"
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private service: VenueService) {
      this.service.getFeatured().subscribe(venues => {
          this.venues = venues.json();
          console.log(this.venues);
      });

   }

   selectedVenue(id, name){
     
    this.messageEvent.emit(id);
    this.selected = name;

    this.service.getEvents(id);
   }

  ngOnInit() {
  }

}

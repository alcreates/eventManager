import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-venue-details',
  templateUrl: './customer-venue-details.component.html',
  styleUrls: ['./customer-venue-details.component.css']
})
export class CustomerVenueDetailsComponent implements OnInit {
  venueInfo;
  constructor(private route: ActivatedRoute) { 
   
    this.venueInfo = this.route.snapshot.params;
    console.log(this.venueInfo);
  }

  ngOnInit() {
  }

}

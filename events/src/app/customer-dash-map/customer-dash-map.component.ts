import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dash-map',
  templateUrl: './customer-dash-map.component.html',
  styleUrls: ['./customer-dash-map.component.css']
})
export class CustomerDashMapComponent implements OnInit {
  latitude = 40.730610;
  longitude = -73.935242;
  constructor() { }

  ngOnInit() {
  }

  onChoseLocation(e){
    console.log(e);
    this.latitude = e.coords.lat;
    this.longitude = e.coords.lng;
  }

}

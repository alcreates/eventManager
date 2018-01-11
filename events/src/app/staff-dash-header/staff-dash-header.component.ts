import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-staff-dash-header',
  templateUrl: './staff-dash-header.component.html',
  styleUrls: ['./staff-dash-header.component.css']
})
export class StaffDashHeaderComponent implements OnInit {
  @Input('staffInfo') staffInfo;
  constructor() { 
   
  }

  ngOnInit() {
  }

}

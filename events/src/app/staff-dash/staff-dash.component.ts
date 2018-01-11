
import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-staff-dash',
  templateUrl: './staff-dash.component.html',
  styleUrls: ['./staff-dash.component.css']
})
export class StaffDashComponent implements OnInit, OnDestroy {
  id;
  staffInfo = {};
  sub;
  constructor(private staff: StaffService, private route: ActivatedRoute, private service: StaffService) {
      this.id = route.snapshot.paramMap.get('userId');
      
      this.sub = this.service.getStaffMember(this.id).subscribe(response =>{
        this.staffInfo = response.json()[0];
        
      });
    
    
  }

  ngOnInit() {



  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}

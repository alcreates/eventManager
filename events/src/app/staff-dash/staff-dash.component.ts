import { FormGroup, FormBuilder } from '@angular/forms';

import { Component, OnInit, ViewChild } from '@angular/core';
import { StaffService } from '../staff.service';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-staff-dash',
  templateUrl: './staff-dash.component.html',
  styleUrls: ['./staff-dash.component.css']
})
export class StaffDashComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;
  options: FormGroup;
  reason = '';
  id;
  staffInfo = {};
  sub;
  constructor(private staff: StaffService, private route: ActivatedRoute, private service: StaffService,fb: FormBuilder) {
      this.id = route.snapshot.paramMap.get('userId');
      
      this.sub = this.service.getStaffMember(this.id).subscribe(response =>{
        this.staffInfo = response.json()[0];
        
      });

      this.options = fb.group({
        'fixed': false,
        'top': 0,
        'bottom': 0,
      });
    
    
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  

  ngOnInit() {



  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}

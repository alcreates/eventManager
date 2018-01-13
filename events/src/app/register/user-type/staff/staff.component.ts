import { Subscription } from 'rxjs/Rx';
import { AuthServiceService } from '../../../auth-service.service';
import { ISubscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  user;
  Subscription: ISubscription;
  constructor(private router: Router, private auth: AuthServiceService) {

    this.user = {
      firstName: '',
      lastName: '',
      streetAddress: '',
      state: '',
      zipcode: null,
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      type: 'personal'
    };

   }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.Subscription.unsubscribe();
  }
  log(x) {
    console.log(x);
  }
  submit(f) {
    console.log('in submit');
    console.log(this.user);

    this.Subscription = this.auth.registerPersonal(this.user).subscribe(user => {
      this.auth.isLoggedIn();
      const result = user.json();
      if (result.user === true) {
          this.router.navigateByUrl('/');
      }else {
          this.router.navigateByUrl('/');
      }
    });
  }
  isNotMatch() {
    if (this.user.password !== this.user.confirmPassword) {
        return true;
    }
  }


}

import { Subscription } from 'rxjs/Rx';
import { AuthServiceService } from '../../../auth-service.service';
import { ISubscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit, OnDestroy {
  user;
  Subscription: ISubscription;
  constructor(private auth: AuthServiceService) {

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
      console.log(user);
   
    });
  }
  isNotMatch() {
    if (this.user.password !== this.user.confirmPassword) {
        return true;
    }
  }
  

}

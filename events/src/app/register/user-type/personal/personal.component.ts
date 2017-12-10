
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  user;
  constructor() {

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
    };

   }

  ngOnInit() {
  }
  log(x) {
    console.log(x);
  }
  submit(f) {
    console.log(f);
  }
  isNotMatch() {
    if (this.user.password !== this.user.confirmPassword) {
        return true;
    }
  }

}

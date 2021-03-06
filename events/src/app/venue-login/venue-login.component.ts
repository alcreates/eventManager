import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue-login',
  templateUrl: './venue-login.component.html',
  styleUrls: ['./venue-login.component.css']
})
export class VenueLoginComponent implements OnInit {

  clientHeight: number;
  loginInfo;
  loginFailed = false;

  constructor(private router: Router, private auth: AuthServiceService) {
        this.clientHeight = window.innerHeight;
        this.loginInfo = {
              email: '',
              password: ''
        };
  }
  ngOnInit() {
  }
   
    login() {
      console.log('in first login');
      this.auth.login(this.loginInfo).subscribe(response => {
          this.auth.isLoggedIn();
          const result = response.json();
          if (result.auth === true) {
              this.router.navigateByUrl('/customerdash');
          }else {
              console.log('login failed');
              this.loginFailed = true;
              console.log(this.loginFailed);
             // this.router.navigateByUrl('/');
          }

      });
    }



}

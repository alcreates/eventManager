import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientHeight: number;
  loginInfo;
  
  constructor(private router: Router, private auth: AuthServiceService) {
        this.clientHeight = window.innerHeight;
        this.loginInfo = {
              email: '',
              password: ''
        };
  }
  ngOnInit() {
  }
    googleLogin() {
      this.auth.googleLogin();
    }

    login() {
      console.log('in first login');
      this.auth.login(this.loginInfo).subscribe(response => {
          this.auth.isLoggedIn();
          const result = response.json();
          if (result.auth === true) {
              this.router.navigateByUrl('/');
          }else {
              this.router.navigateByUrl('/');
          }

      });
    }


}

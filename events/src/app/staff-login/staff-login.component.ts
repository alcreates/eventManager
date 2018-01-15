import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

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
      console.log(this.loginInfo);
      this.auth.staffLogin(this.loginInfo).subscribe(response => {
          this.auth.isLoggedIn();
          const result = response.json();
          console.log(result);
          if (result.isUser === true) {
              this.router.navigate(['/staffDash', {userId: result.user.id}]);
          }else {
              console.log('login failed');
              this.loginFailed = true;
              console.log(this.loginFailed);
             // this.router.navigateByUrl('/');
          }

      });
    }



}

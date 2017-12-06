import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientHeight: number;
  
  constructor(private auth: AuthServiceService) {
        this.clientHeight = window.innerHeight;
  }
  ngOnInit() {
  }
    googleLogin() {
      this.auth.googleLogin();
    }

}

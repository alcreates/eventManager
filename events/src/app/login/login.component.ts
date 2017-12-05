import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientHeight: number;
  
  constructor() {
        this.clientHeight = window.innerHeight;
  }
  ngOnInit() {
  }

}

import { AuthServiceService } from '../auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 isLogged = null;
  constructor(private auth: AuthServiceService) {
    this.auth.isLoggedIn();
    this.auth.islogged$.subscribe((response) => {
        this.isLogged = response;
    });
  }

  ngOnInit() {
  }

}

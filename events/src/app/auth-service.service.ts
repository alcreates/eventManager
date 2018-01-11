import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class AuthServiceService {
  private messageSource = new BehaviorSubject<object>({auth: false});
  islogged$ = this.messageSource.asObservable();

  constructor(private http: Http) {
  }

  googleLogin() {
    this.http.get('http://localhost:3000/auth/google').subscribe(response => {

    });
  }
  isLoggedIn() {
     this.http.get('http://localhost:3000/auth/authcheck').subscribe((response) => {

      this.messageSource.next(response.json());
    });
  }
  logOut(){
    console.log("in auth log out");
    this.http.get('http://localhost:3000/auth/logout').subscribe(response =>{
       console.log('logged out');
    });
  }

  registerPersonal(post) {

    return this.http.post('http://localhost:3000/auth/signup', post);
  }
  registerVenue(post) {
    return this.http.post('http://localhost:3000/auth/venue-signup', post);
  }
  login(post) {
    return this.http.post('http://localhost:3000/auth/login', post);
  }
  venueLogin(post) {
    return this.http.post('http://localhost:3000/auth/venue_login', post);
  }
  staffLogin(post){

    return this.http.post('http://localhost:3000/auth/staff_login', post);

  }
  registerStaff(post) {
    return this.http.post('http://localhost:3000/auth/staff-signup', post);
  }
}

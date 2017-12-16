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
    this.http.get('/auth/google').subscribe(response => {

    });
  }
  isLoggedIn() {
     this.http.get('/auth/authcheck').subscribe((response) => {

      this.messageSource.next(response.json());
    });
  }

  registerPersonal(post) {

    return this.http.post('/auth/signup', post);
  }
  registerVenue(post) {
    return this.http.post('/auth/venue-signup', post);
  }
  login(post) {
    return this.http.post('/auth/login', post);
  }
  venueLogin(post) {
    return this.http.post('/auth/venue_login', post);
  }
}

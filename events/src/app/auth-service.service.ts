import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceService {

  constructor(private http: Http) {
  }

  googleLogin() {
    this.http.get('/auth/google').subscribe(response => {
      console.log(response);
    });
  }
  isLoggedIn() {
    return this.http.get('/auth/authcheck');
  }

  registerPersonal(post) {

    return this.http.post('/auth/signup', post);
  }
  login(post){
    console.log('in login');
    return this.http.post('/auth/login', post);
  }
}

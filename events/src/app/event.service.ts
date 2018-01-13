import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EventService {

  constructor(private http: Http) {

   }

  getLocations() {
    return this.http.get('http://localhost:3000/event/locations');
  }

}

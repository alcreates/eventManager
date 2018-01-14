import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EventService {

  constructor(private http: Http) {

   }

  getLocations() {
    return this.http.get('http://localhost:3000/event/locations');
  }

  getEvents(id){
    const search = new URLSearchParams();
    search.set('id', id);
    return this.http.get('http://localhost:3000/event/get-events',{search: search});
  }

}

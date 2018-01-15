import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {URLSearchParams} from '@angular/http';

@Injectable()
export class VenueService {
  private messageSource = new BehaviorSubject<any>([]);
  currentMessage = this.messageSource.asObservable();


  constructor(private http: Http) { }

  getFeatured() {
    return this.http.get('http://localhost:3000/venue/featured');
  }

  getEvents(id){
    const search = new URLSearchParams();
    search.set('id', id);
    this.http.get('http://localhost:3000/event/get-events',{search: search}).subscribe(events => {
        console.log(events.json(), "these are the events");
        this.messageSource.next(events.json());
    });
  }

}

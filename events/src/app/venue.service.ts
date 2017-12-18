import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class VenueService {

  constructor(private http: Http) { }

  getFeatured() {
    return this.http.get('http://localhost:3000/venue/featured');
  }

}

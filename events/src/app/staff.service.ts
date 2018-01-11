import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {URLSearchParams} from '@angular/http';

@Injectable()
export class StaffService {

  constructor(private http: Http) { }

  getStaffMember(id) {
    const search = new URLSearchParams();
    search.set('id', id);
    return this.http.get('http://localhost:3000/staff/member', {search: search});
  }

}

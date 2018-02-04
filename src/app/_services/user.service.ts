import { Injectable } from '@angular/core';

// import{ AjaxService } from './ajax.service';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Client } from '../_objects/client';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UserService {

  user: Client = null;
  // user = null;//{id:1, surname:1};

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
    this.loadUser();
  }

  chechAuth() {
    if (this.user && this.user.name) {
      return true;
    }else {
      return false;
    }
  }

  loadUser() {
    this.http.get<Client>('user/client/')
      .subscribe(value => {
        console.log('load user', value);
        this.user = value;
        this.cookieService.set( 'instaauth', value.cookies, 9999 );
      });
  }

  getUser(): Client {
  // public getUser(){
    return this.user;
  }

  setUser(client) {
    this.user = client;
    console.log('user', this.user);

  }

}

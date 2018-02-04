import { Component, OnInit, Input } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { UserService } from '../_services/user.service';
import { Client } from '../_objects/client';

import { ModalService } from '../_services/index';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  moduleId: module.id.toString(),
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public mode = 'email';
  public email;
  public load = false;

  @Input() client: Client;

  constructor(
   public userService: UserService,
   public modalService: ModalService,
   private http: HttpClient
  ) {}

  /*getClient() {
     // this.client = this.userService.getUser();
      // .subscribe(client => this.client = client);
  }*/

  setMode(mode) {
    this.mode = mode;
  }

  openAuth() {
    this.modalService.open('auth-modal');
    /*console.log('click open auth');
    this.userService.setUser({
      id: 1,
      name: 'Виктор',
      surname: 'Андреевич'
    });*/

  }

  closeModal() {
    this.modalService.close();
  }

  ngOnInit() {
    // this.getClient();
  }

  sendEmail(event: Event) {
    event.preventDefault();
    this.load = true;

    // window.r = this.http;

    this.http.post('user/emailAuth/', JSON.stringify({
      email : this.email,
    }))
      .subscribe(value => {
        console.log('load user', value);
        // this.load = false;
        /*this.user = value;
        this.cookieService.set( 'instaauth', value.cookies, 9999 );*/
      });
  }

}

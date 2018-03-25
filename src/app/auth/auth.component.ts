import { Component, OnInit, Input } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { UserService } from '../_services/user.service';
import { Client } from '../_objects/client';

import { ModalService } from '../_services/index';

import { HttpClient } from '@angular/common/http';

import { EventsService } from '../_services/events.service';

interface EmailAuthResponse {
  stat: number;
}

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
   private http: HttpClient,
   private events: EventsService
  ) {
    console.log('auth', this);
  }

  /*getClient() {
     // this.client = this.userService.getUser();
      // .subscribe(client => this.client = client);
  }*/

  setMode(mode) {
    this.mode = mode;
  }

  openAuth() {
    this.modalService.open('auth-modal');
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

    console.log('send mail', this);

    // window.r = this.http;

    this.http.post<EmailAuthResponse>('user/emailAuth/', JSON.stringify({
      email : this.email,
    }))
      .subscribe(data => {
        if (data.stat === 1) {
          this.events.pool()
            .then((res) => {
              console.log('try set user', res);
              this.userService.setUser(res['client']);
              this.load = false;
            });
        }
        // this.load = false;
        /*this.user = value;
        this.cookieService.set( 'instaauth', value.cookies, 9999 );*/
      });
  }

}

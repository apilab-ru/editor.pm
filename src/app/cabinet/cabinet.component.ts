import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent {
  title = 'Cabinet';

  constructor(public user: UserService) {
    // console.log('user', this.user);
  }

}

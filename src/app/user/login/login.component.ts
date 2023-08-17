import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /** 서비스 인젝션 */
  constructor(private userService: UserService) { }

  UserInfo = this.userService.getUserInfo("colacan_tester");
}

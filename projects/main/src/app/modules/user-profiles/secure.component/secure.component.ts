import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersecure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css'],
})
export class UserSecureComponent implements OnInit {
  title = 'emptypage';
  changePasswordPlag: boolean = false;
  ngOnInit() {}

  enableChangePassword(enable: boolean) {
    this.changePasswordPlag = enable;
  }
}

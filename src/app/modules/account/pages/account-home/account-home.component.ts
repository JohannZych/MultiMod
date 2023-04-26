import {Component, OnInit} from '@angular/core';
import {User} from "../../../../models/user.model";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.scss']
})
export class AccountHomeComponent implements OnInit{

  userList!: User[] ;
  user!: User;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userList = this.userService.getUserList();
    this.user = this.userList[Math.floor(Math.random() * 3)];
  }

}

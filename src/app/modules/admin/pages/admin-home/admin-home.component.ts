import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../models/user.model";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit{
  userList!: User[] ;
  user!: User;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userList = this.userService.getUserList();
  }

}

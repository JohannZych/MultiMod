import { Injectable } from '@angular/core';
import users from 'src/assets/json/users.json';
import {User} from "../models/user.model";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [];
  constructor( ) { }

    public getUserList(): User[]
    {
      return this.userList = users;
    }

}

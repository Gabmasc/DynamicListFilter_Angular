import { Component, OnInit } from '@angular/core';
import { IUser } from './interface/user.interface';
import { UserList } from './DATA/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
showUserDetails: boolean = false;
userSelected: IUser = {} as IUser;
userList: IUser [] = [];
userListFiltered: IUser [] = [];


ngOnInit() {
  setTimeout(() => {
    this.userList = UserList;
    this.userListFiltered = this.userList;
  })
}


}

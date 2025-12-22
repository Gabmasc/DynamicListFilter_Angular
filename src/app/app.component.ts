import { Component } from '@angular/core';
import { IUser } from './interface/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
showUserDetails: boolean = false;
userSelected: IUser = {} as IUser;
userList: IUser [] = [];
userListFiltered: IUser [] = [];
}

import { Component, OnInit } from '@angular/core';
import { IUser } from './interface/user.interface';
import { UserList } from './DATA/users-list';
import { IFilterOptions } from './interface/filter-options/filter-options.interface';

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
  }, 2000)
};

onUserSelected(user: IUser){
  this.userSelected = user;

  this.showUserDetails = true;
}

onFilter(filterOptions: IFilterOptions){
  console.log(filterOptions);

  this.userListFiltered = this.filterUsersList(filterOptions, this.userList);
}

filterUsersList(filterOptions: IFilterOptions, userList: IUser[]): IUser[] {
    ;
  }

}

import { Component, OnInit } from '@angular/core';
import { IUser } from './interface/user.interface';
import { UserList } from './DATA/users-list';
import { IFilterOptions } from './interface/filter-options/filter-options.interface';
import { isWithinInterval } from 'date-fns';

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
    let filteredList: IUser[] = [];
  
  filteredList = this.filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
  filteredList = this.filterUsersListByName(filterOptions.name, userList);
  filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList);  

  return filteredList;
  }

  filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, filteredList: IUser[]): IUser[] {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;
    if(DATES_NOT_SELECTED){
      return filteredList;
    }
    const userListFilteredList = filteredList.filter((user) => isWithinInterval(new Date(user.datacadastro), {
      start: startDate,
      end: endDate
    }));
    return userListFilteredList;
    }

  filterUsersListByName(typpedName: string | undefined, filteredList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = typpedName === undefined;

    if(NAME_NOT_TYPPED){
      return filteredList;
        }

    const filteredListByName = filteredList.filter((user) => user.nome.toLowerCase().includes(typpedName.toLowerCase()));

    return filteredListByName;
  }
   
  filterUsersListByStatus(status: boolean | undefined, filteredList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;

    if(STATUS_NOT_SELECTED){
      return filteredList;
    }

    const filteredListByStatus = filteredList.filter((user) => user.ativo === status);
    return filteredListByStatus;
  }

}

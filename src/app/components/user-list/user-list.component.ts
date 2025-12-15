import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interface/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  displayedColumns : string [] = ['Nome', 'Data', 'Status']
  @Input({required: true}) userList: IUser[] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>()

  onUserSelected(user: IUser){
    console.log('User: ', user);

    this.userSelectedEmitt.emit(user);
  }
}

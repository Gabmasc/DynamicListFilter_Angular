import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  displayedColumns : string [] = ['Nome', 'Data', 'Status']

  @Output('userSelected') userSelectedEmitt = new EventEmitter<>()

  onUserSelected(){

  }
}

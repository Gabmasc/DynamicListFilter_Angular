import { Component, Input } from '@angular/core';
import { IUser } from '../../interface/user.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  @Input({required: true}) user: IUser = {} as IUser;
}

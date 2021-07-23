import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/user.class';
import { IUser } from '../shared/user.interface';
import { UsersService } from '../shared/users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users$: Observable<IUser[]> = this.usersService.users$;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  addUser() {
    this.usersService.users$.value.push(new User('Julie', 9));
  }
}

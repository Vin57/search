import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IUser } from '../shared/user.interface';
import { UsersService } from '../shared/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  public users$: Observable<IUser[]> = this.usersService.users$;
  public users: IUser[];
  public subscription: Subscription = new Subscription();
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.subscription = this.users$.subscribe((users) => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

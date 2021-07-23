import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from './user.class';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([
    new User('Juliette', 18),
    new User('Julie', 30),
    new User('Paul', 25),
    new User('Thomas', 95),
    new User('Tom', 45),
  ]);

  constructor() {}
}

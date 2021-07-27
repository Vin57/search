import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, tap, map } from 'rxjs/operators';
import { User } from './user.class';
import { IUser } from './user.interface';

const API_NAME = 'vincentuser9';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>(
    null
  );

  constructor(private httpService: HttpClient) {}

  fetchAll(): Observable<IUser[]> {
    return this.httpService.get<IUser[]>(
      `https://restapi.fr/api/${API_NAME}/`
    ).pipe(
      filter((users) => users !== []),
      tap((users) => this.users$.next(users))
    );
  }

  get(searchedId: string): Observable<IUser> {
    return this.users$.pipe(
      filter((users: IUser[]) => users !== null ),
      map((users: IUser[]) => {
        return users[searchedId]
      })
    )
  }

  add(user: IUser): Observable<IUser> {
    return this.httpService.post<IUser>(
      `https://restapi.fr/api/${API_NAME}`,
      user
    ).pipe(
      tap((user) => {
        const value = this.users$.value;
        this.users$.next([...value, user]);
      })
    );
  }

  update(updatedUser: IUser): Observable<IUser> {
    return this.httpService.patch<User>(
      `https://restapi.fr/api/${API_NAME}/${updatedUser._id}`,
      updatedUser
    ).pipe(
      tap((updatedUser) => {
        const value = this.users$.value;
        const upValue = value.map((user) => {
          if (user._id === updatedUser._id) {
            return updatedUser;
          } else {
            return user;
          }
        });
        this.users$.next(upValue);
      })
    );
  }

  delete(user: IUser): Observable<IUser> {
    return this.httpService.delete<IUser>(
      `https://restapi.fr/api/${API_NAME}/${user._id}`
    ).pipe(
      tap((deletedUser: IUser) => {
        const value = this.users$.value;
        const upValue = value.filter((user) => deletedUser._id !== user._id);
        this.users$.next(upValue);
      })
    );
  }
}

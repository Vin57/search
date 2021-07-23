import { IUser } from './user.interface';

export class User implements IUser {
  constructor(public name: string, public age: number) {}

  toString() {
    return this.name;
  }
}

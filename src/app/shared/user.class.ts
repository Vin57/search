import { IUser } from './user.interface';

export class User implements IUser {
  constructor(public name: string, public age: number, public _id?: string) {}

  toString() {
    return this.name;
  }
}

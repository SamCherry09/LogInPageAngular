import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(index: number): User{
    return USERS[index];
  }
  geAmountOfUsers(): number{
    return USERS.length;
  }
  constructor() { }
}

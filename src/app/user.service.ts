import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-user';
import{Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user?: User;
  getUser(iD: number): Observable<User>{
    this.user = USERS.find(u => u.iD === iD.toString());
    if(this.user){
      return of(this.user) ;
    }
    else{
      return of(USERS[0]);
    }
  }
  getUsers(): Observable<User[]>{
    return of(USERS);
  }
  geAmountOfUsers(): number{
    return USERS.length;
  }
  constructor() { }
}

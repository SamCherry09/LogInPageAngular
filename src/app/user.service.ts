import { Injectable } from '@angular/core';
import { User} from './user';
import { USERS } from './mock-user';
import{Observable, of} from 'rxjs';
import{filter,map,take} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user?: User;
  userUrl: string = 'http://localhost:4000/users';
  testUrl: string = 'assets/users.json';
  
  // getServerUsers(): Observable<User[]>{
  //   return this.http.get<User[]>(this.testUrl);
  // }
  getUser(id: number): Observable<User> | undefined{
    // this.user = USERS.find(u => u.id === id.toString());
    return this.http.get<User[]>(this.userUrl).pipe(map(users => users.filter(u => u.id === id.toString())[0]));
  }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }
  constructor( private http:  HttpClient) { }
}

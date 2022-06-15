import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Observable, of } from 'rxjs';
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
  getUser(id: number): Observable<User> | undefined {
    return this.http.get<User>("http://localhost:4000/user", { params: { id: id.toString() } })
  }
  // getUsers(): Observable<User[]>{FGF
  //   return this.http.get<User[]>(this.userUrl);
  // }
  constructor(private http: HttpClient) { }
}

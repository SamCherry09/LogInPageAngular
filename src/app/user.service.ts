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
    return this.http.get<User>("https://profile-example-app-sc.herokuapp.com/user", { params: { id: id.toString() } })
  }
  deleteUser(id: number):void{
    this.http.delete("https://profile-example-app-sc.herokuapp.com/user", { params: { id: id.toString() } })
  }
  createUser(email: string,password: string,name:string,famName: string){
    this.http.put("https://profile-example-app-sc.herokuapp.com/user", { email,password,name,famName,id: "Ueberschreibbar"})
  }
  updateUser(email: string,password: string,name:string,famName: string,id: string){
    this.http.post("https://profile-example-app-sc.herokuapp.com/user", { email,password,name,famName,id})
  }
  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserDTO } from './models/user-dto.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogInService {
  id:string = ""
  constructor(private http: HttpClient) { }
  logIn(enteredEmail: string,enteredPassword: string): Observable<string>{
    return this.http.post<UserDTO>("http://localhost:4000/LogIn", {"email":enteredEmail,"password":enteredPassword}).pipe(map(userDTO => {
      return userDTO.id
    }))
    
  }
}

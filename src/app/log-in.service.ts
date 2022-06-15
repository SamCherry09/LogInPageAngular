import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserDTO } from './models/user-dto.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogInService {
  constructor(private http: HttpClient) { }
  logIn(email: string, password: string): Observable<string> {
    return this.http.post<UserDTO>("https://profile-example-app-sc.herokuapp.com/LogIn", { email, password }).pipe(map(userDTO => {
      return userDTO.id
    }))

  }
}

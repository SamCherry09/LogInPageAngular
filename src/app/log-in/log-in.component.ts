import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { WindowService } from '../window.service';
import { LogInService } from '../log-in.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit, AfterViewInit, OnDestroy {
  enteredEmail: string = "";
  enteredPassword: string = "";
  @ViewChild("errorMessage")
  errorMessageElement?: ElementRef;
  hasError?: boolean;
  constructor(private userService: UserService, private http: HttpClient,private side: WindowService,private logInS: LogInService) { }
  user?: User;
  private subscriptions: Subscription[] = [];
  users: User[] = [];

  id: string = "";

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }
  logIn() {
    this.subscriptions.push(this.logInS.logIn(this.enteredEmail,this.enteredPassword).subscribe(id => {
      if (id != "") {
        this.side.goToProfilePage(id);
        return
      }
      this.hasError = true;
    }))
    
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
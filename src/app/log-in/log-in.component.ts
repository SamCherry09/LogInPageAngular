import { AfterViewInit, Component, ElementRef, OnInit, ViewChild ,OnDestroy} from '@angular/core';
import { Observable ,Subscription} from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit , AfterViewInit, OnDestroy{
  enteredEmail: string = "";
  enteredPassword: string = "";
  @ViewChild("errorMessage")
  errorMessageElement?: ElementRef;
  hasError?: boolean;
  constructor(private userService: UserService) { }
  user?: User;
  private subscriptions: Subscription[] = [];
  users: User[] = [];

  ngOnInit(): void {
    this.subscriptions.push(this.userService.getUsers().subscribe(users => this.users = users));
  }
  ngAfterViewInit(): void{
    console.log(this.errorMessageElement);
  }
  logIn() {
    console.log("Geklicked")
    // this.errorMessageElement.nativeElement.classList.remove("hidden");
    
    if (this.enteredEmail != null && this.enteredPassword != null) {
      for (const user of this.users) {//For-of-loop over this.users
         
        if (this.enteredEmail == user.email && this.enteredPassword == user.password) {
          // this.errorMessageElement?.nativeElement.classList.add("hidden");
          window.location.replace("../profile/" +user.iD);
          return;
        }
        
      }

    }
    this.hasError = true;
  }
  ngOnDestroy(){
    for(const subscription of this.subscriptions){
      subscription.unsubscribe();
    }
  }
}

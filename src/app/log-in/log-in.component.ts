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

  ngOnInit(): void {
    let x = 5;
    let y = x;
    x = 7;
    console.log(x, y);
  }
  ngAfterViewInit(): void{
    console.log(this.errorMessageElement);
  }
  logIn() {
    console.log("Geklicked")
    // this.errorMessageElement.nativeElement.classList.remove("hidden");
    
    if (this.enteredEmail != null && this.enteredPassword != null) {
      for (let i = 0; i < this.userService.geAmountOfUsers(); i++) {
         this.subscriptions.push(this.userService.getUser(i).subscribe(User => this.user = User));
        if (this.enteredEmail == this.user?.email && this.enteredPassword == this.user?.password) {
          // this.errorMessageElement?.nativeElement.classList.add("hidden");
          window.location.replace("../profile/" + i);
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

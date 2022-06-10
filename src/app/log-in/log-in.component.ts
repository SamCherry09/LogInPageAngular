import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit , AfterViewInit{
  enteredEmail: string = "";
  enteredPassword: string = "";
  @ViewChild("errorMessage")
  errorMessageElement?: ElementRef;
  hasError?: boolean;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
    console.log(this.errorMessageElement);
  }
  logIn() {
    console.log("Geklicked")
    // this.errorMessageElement.nativeElement.classList.remove("hidden");
    
    if (this.enteredEmail != null && this.enteredPassword != null) {
      for (let i = 0; i < this.userService.geAmountOfUsers(); i++) {
        let user = this.userService.getUser(i);
        if (this.enteredEmail == user.email && this.enteredPassword == user.password) {
          // this.errorMessageElement?.nativeElement.classList.add("hidden");
          window.location.replace("../profile/" + i);
          return;
        }
        
      }

    }
    this.hasError = true;
  }
}

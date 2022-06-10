import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  enteredEmail?: string;
  enteredPassword?: string;
  constructor(private users: UserService) { }

  ngOnInit(): void {
    
  }
  logIn(){
    console.log("Geklicked")
    if(this.enteredEmail != null && this.enteredPassword != null){
      for(let i = 0; i<this.users.geAmountOfUsers();i++){
        let user = this.users.getUser(i);
        if(this.enteredEmail == user.email && this.enteredPassword == user.password){
          window.location.replace("../profile/"+i);
          console.log("Eingeloggt")
        }
      }
      console.log("Angefangen")
    }
    
  }
}

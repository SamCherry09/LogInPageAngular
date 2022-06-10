import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,private userservice: UserService ) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser():void{
    const index = Number(this.route.snapshot.paramMap.get('index'));
    const user = this.userservice.getUser(index);
    const emailfieled = document.getElementById('emailfield');
    const namefieled = document.getElementById('namefield');
    if(namefieled != null){
      namefieled.innerHTML = user.name +" " +user.famName;
    }
    if(emailfieled != null){
      emailfieled.innerHTML = user.email;
    }
    

  }
  logOut(){
    window.location.replace("../LogIn");
  }

}

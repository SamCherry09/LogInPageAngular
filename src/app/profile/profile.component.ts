import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  emailfieled: string= "Missing Email";
  namefieled: string= "Missing Name";
  constructor(private route: ActivatedRoute,private userservice: UserService ) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser():void{
    const index = Number(this.route.snapshot.paramMap.get('index'));
    const user = this.userservice.getUser(index);
    this.emailfieled = user.email;
    this.namefieled = user.name +" " +user.famName;
  }
  logOut(){
    window.location.replace("../LogIn");
  }

}

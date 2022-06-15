import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Observable ,Subscription} from 'rxjs';
import { User } from '../models/user';
import { WindowService } from '../window.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  emailfieled: string= "Missing Email";
  namefieled: string= "Missing Name";
  user$?: Observable<User>;
  constructor(private route: ActivatedRoute,private userservice: UserService, private side: WindowService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser():void{
    const index = Number(this.route.snapshot.paramMap.get('index'));
    this.user$ = this.userservice.getUser(index);
    // this.emailfieled = user.email;
    // this.namefieled = user.name +" " +user.famName;
  }
  logOut(){
    this.side.goToLogInPage();
  }


}

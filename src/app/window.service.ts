import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }

  goToLogInPage(){
    window.location.replace("../LogIn");
  }
  goToProfilePage(id: string){
    window.location.replace("../profile/" + id);
  }
}

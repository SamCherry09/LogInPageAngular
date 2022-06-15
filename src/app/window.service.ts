import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }

  public goToLogInPage(){
    window.location.replace("../LogIn");
  }
  public goToProfilePage(id: string){
    window.location.replace("../profile/" + id);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: any, password: any){
    console.log('HardcodedAuthenticationService--->authenticate');
    if(username==="uttam" && password==="root"){
      sessionStorage.setItem('authenticateUser', username)
      // console.log('After :'+this.isUserLoggedIn());
      return true;
    }
    else{
      console.log('password incorrect')
      return false;
    }
  }

  isUserLoggedIn(){
    console.log('HardcodedAuthenticationService--->isUserLoggedIn')
    let user= sessionStorage.getItem('authenticateUser')
    return !(user===null)
  }

  logout(){
    console.log('HardcodedAuthenticationService--->logout')
    sessionStorage.removeItem('authenticateUser')
  }

}

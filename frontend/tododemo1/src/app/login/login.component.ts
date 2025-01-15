import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    username = 'uttam'
    password =''
    errorMessage ='invalid credentials'
    invalidLogin= false

    //Router
    //Angular.giveMeRouter
    //Dependency Injection :Angular having built in feature

    constructor(private router : Router, private hardcodedAuthenticationService: HardcodedAuthenticationService ){ } //In typescript, if we pass as a constructor arguements  then it is member variable.

    // Two Way Data Binding
    handleLogin(){
      // console.log(this.username)
      // if(this.username ==="uttam" && this.password ==="123"){
      //   redirect to welcome page
      //   this.router.navigate(['welcome', this.username])

      //   this.invalidLogin = false
      // }
      // else{
      //   this.invalidLogin = true
      // }

      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
        //redirect to welcome page using service layer
        this.router.navigate(['welcome', this.username])

        this.invalidLogin = false
      }
      else{
        this.invalidLogin = true
      }
    }
}

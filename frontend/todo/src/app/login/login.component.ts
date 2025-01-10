import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username ='uttam'
  password =''
    
  handleLogin() {
    //1.Interpolation {{username}}
  
    console.log(this.username)
  }
}

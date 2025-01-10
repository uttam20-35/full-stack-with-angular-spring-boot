import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, WelcomeComponent],
  templateUrl: './app.component.html',
  // template: '<h1> {{ title }} </h1>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  msg='uttam here'; //Data Binding
}

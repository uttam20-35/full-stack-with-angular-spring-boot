import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';

const routes: Routes = [
  
  {path:'login', component: LoginComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'welcome/:name', component: WelcomeComponent},
  {path:'todos', component: ListToDoComponent},
  {path:'**', component: ErrorComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

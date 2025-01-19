import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  {path:'', component: LoginComponent}, //canActivate, RouteGuardService
  {path:'login', component: LoginComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'todos', component: ListToDoComponent,canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent,canActivate:[RouteGuardService]},
  {path:'**', component: ErrorComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

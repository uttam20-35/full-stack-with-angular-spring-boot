import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor
  (private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log('RouteGuardService---->canActivate ,log out clicked')
    if(this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;
    this.router.navigate(['login'])
    return false;
    // throw new Error('Method not implemented.');
  }
}

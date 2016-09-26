import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthorisationGuard implements CanActivate {
  constructor(private _localStorageService : LocalStorageService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let loginDetails = this._localStorageService.get('loginDetails');
    if (loginDetails !== null){
    let expiryDate = new Date(loginDetails[".expires"]);
    let expiryDateNumber = expiryDate.getTime();
    let currentDate = Date.now();
      
    //this one needs to be there in case our login has expired.
    if (expiryDateNumber < currentDate)
    {
      this._localStorageService.remove('loginDetails');
      return false;
    }
     
      return true;
    }
    
    this.router.navigate(['login']);
    return false;
  }
}
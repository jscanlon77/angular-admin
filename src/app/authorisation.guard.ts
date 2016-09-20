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
      return true;
    }
    
    this.router.navigate(['login']);
    return false;
  }
}
import { Component, ViewEncapsulation, provide, Provider } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor(private _localStorage: LocalStorageService, private _router:Router) {

    // So in here we want to redirect the user via navigation if they don't have a token
    // and force them to sign in. and also put some protection against all the other pages
    // if there is an attempt to reach them.
    let loginDetails = _localStorage.get('loginDetails');
    if (loginDetails !== null){
      // examine them to see if the expiry is ok for the token.

    }
    else{
      this._router.navigate(['login']);
    }
  }

}

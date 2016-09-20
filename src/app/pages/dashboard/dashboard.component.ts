import { Component, ViewEncapsulation, provide, Provider } from '@angular/core';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';
import { HTTP_PROVIDERS } from '@angular/http';

let localStorageServiceConfig = {
    prefix: 'investor-analytics',
    storageType: 'sessionStorage'
};

const LOCAL_STORAGE_CONFIG_PROVIDER: Provider = provide(LOCAL_STORAGE_SERVICE_CONFIG, {
    useValue: localStorageServiceConfig
});

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  providers: [LocalStorageService, LOCAL_STORAGE_CONFIG_PROVIDER],
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor(private _localStorage: LocalStorageService) {

    // So in here we want to redirect the user via navigation if they don't have a token
    // and force them to sign in. and also put some protection against all the other pages
    // if there is an attempt to reach them.
    let loginDetails = _localStorage.get('loginDetails');
    if (loginDetails !== null){
      // examine them to see if the expiry is ok for the token.

    }
  }

}

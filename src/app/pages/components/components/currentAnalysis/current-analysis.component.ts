import { Component, ViewEncapsulation, NgModule } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'current-analysis',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styles: [require('./current-analysis.scss'), require('./buttons.scss')],
  template: require('./current-analysis.html')
})

export class CurrentAnalysis {

  constructor(
  private _localStorage: LocalStorageService) {
    let loginDetails = this._localStorage.get('loginDetails');
    let userName = loginDetails['userName']
    
  }

  save() {
        // do something..
    }
}
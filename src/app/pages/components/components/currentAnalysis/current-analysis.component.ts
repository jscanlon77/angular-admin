import { Component, ViewEncapsulation } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { AutoCompleteCombo } from '../../../../controls/autocomplete/autocomplete-combo';

@Component({
  selector: 'current-analysis',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styles: [require('./current-analysis.scss')],
  template: require('./current-analysis.html')
})

export class CurrentAnalysis {

  constructor(
  private _localStorage: LocalStorageService, private _autoComplete:AutoCompleteCombo) {
    let loginDetails = this._localStorage.get('loginDetails');
    let userName = loginDetails['userName']
    
  }
}
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor() {

    // So in here we want to redirect the user via navigation if they don't have a token
    // and force them to sign in. and also put some protection against all the other pages
    // if there is an attempt to reach them.
  }

}

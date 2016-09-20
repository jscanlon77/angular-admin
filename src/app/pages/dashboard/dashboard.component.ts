import { Component, ViewEncapsulation, provide, Provider } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor() {

    
  }

}

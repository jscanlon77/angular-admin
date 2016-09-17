import { Component, ViewEncapsulation } from '@angular/core';
import { ServicesAvailableService } from './servicesAvailable.service';

@Component({
  selector: 'available-services',
  encapsulation: ViewEncapsulation.None,
  providers: [ServicesAvailableService],
  styles: [require('./availableServices.scss')],
  template: require('./availableServices.html')
})

export class AvailableServices {

  public availableServices: Array<Object>;
  private _init = false;

  constructor(private _servicesAvailableService: ServicesAvailableService) {
    this.availableServices = this._servicesAvailableService.getData();
  }
}

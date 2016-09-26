import { Component, ViewEncapsulation } from '@angular/core';
import { ServicesAvailableService } from './servicesAvailable.service';
import { HealthCheckService } from '../../../services/healthcheck/healthcheck-service';
import { ServiceDetail} from '../../../model/serviceDetail';

@Component({
  selector: 'available-services',
  encapsulation: ViewEncapsulation.None,
  providers: [ServicesAvailableService, HealthCheckService],
  styles: [require('./availableServices.scss')],
  template: require('./availableServices.html')
})

export class AvailableServices {

  public availableServices: Array<ServiceDetail>;
  private _init = false;

  constructor(private _servicesAvailableService: ServicesAvailableService) {
    this.availableServices = this._servicesAvailableService.getAvailableServices();
  }
}

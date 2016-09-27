import { Component, ViewEncapsulation } from '@angular/core';
import { HealthCheckService } from '../../../services/healthcheck/healthcheck-service';
import { ServiceDetail } from '../../../model/serviceDetail';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'available-services',
  encapsulation: ViewEncapsulation.None,
  providers: [HealthCheckService],
  styles: [require('./availableServices.scss')],
  template: require('./availableServices.html')
})

export class AvailableServices {

  public availableServices: Array<ServiceDetail>;
  private _init = false;

  constructor(private _healthCheckService: HealthCheckService, 
  private _localStorage: LocalStorageService) {
    let loginDetails = this._localStorage.get('loginDetails');
    let userName = loginDetails['userName'];
    this._healthCheckService.healthcheck(userName).subscribe(resu => {
      this.availableServices = resu;
    });
  }
}

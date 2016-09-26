import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, colorHelper } from '../../../theme';
import { Http } from '@angular/http';
import { HealthCheckService } from '../../../services/healthcheck/healthcheck-service';
import { ServiceDetail} from '../../../model/serviceDetail';

@Injectable()
export class ServicesAvailableService {

  constructor(private _healthCheckService : HealthCheckService) {
  }

  getAvailableServices() : Array<ServiceDetail> {
    
        this._healthCheckService.healthcheck().subscribe(res=> {
            return res;
        });
        
        return new Array<ServiceDetail>();
    }
}

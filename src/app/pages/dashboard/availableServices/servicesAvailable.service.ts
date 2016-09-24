import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, colorHelper } from '../../../theme';
import { Http } from '@angular/http';
import { HealthCheckService } from '../../services/healthcheck-service';
import { ServiceDetail} from '../../model/service-detail';

@Injectable()
export class ServicesAvailableService {

  constructor(private _healthCheckService : HealthCheckService) {
  }

  getAvailableServices() : Array<ServiceDetail> {
    
        this._healthCheckService.healthcheck().subscribe(res=>res {
            
        });
        return availableServices;
    }
}

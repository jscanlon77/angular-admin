import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import { GlobalService } from '../../globals'
import { ServiceDetail} from '../../model/serviceDetail';

@Injectable()
export class HealthCheckService {
  constructor(private _http: Http, private _globalService:GlobalService) {

  }

  healthcheck(): Observable<Array<ServiceDetail>> {
    
    return this._http.get(this._globalService.serviceHost + '/api/healthcheck/services')
      .map(ref => ref.json())
      .catch(this.handleError);
  }

  

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
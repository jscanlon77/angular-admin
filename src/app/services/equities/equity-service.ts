import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import { GlobalService } from '../../globals'
import { EquityTicker } from '../../model/equityTicker';

@Injectable()
export class EquityService {
  constructor(private _http: Http, private _globalService:GlobalService) {

  }

  getEquities(): Observable<any> {
    
    return this._http.get(this._globalService.serviceHost + '/api/equityinfo/equitytickers')
      .catch(this.handleError);
  }

  getEquityListByTerm(term:string, interval:string) : Observable<EquityTicker[]> {
     return this._http.get(this._globalService.serviceHost + '/api/equityinfo/equitytickersbyterm/' + term + '/' + interval)
     .map(response => response.json())
     .catch(this.handleError);
  }

  getSecondaryEquityListByTerm(term:string, interval:string, primaryEquity:string) : Observable<EquityTicker[]>
  {
     return this._http.get(this._globalService.serviceHost + '/api/equityinfo/secondaryequitytickersbyterm/' + term + '/' + interval + '/' + primaryEquity)
     .map(response => response.json())
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
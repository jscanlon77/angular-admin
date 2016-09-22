import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class EquityService {
  private serviceBase = 'https://localhost:44300';
  constructor(private _http: Http) {

  }

  getEquities(): Observable<any> {
    
    return this._http.get(this.serviceBase + 'api/staticdata/equitytickers')
      .catch(this.handleError);
  }

  getEquityListByTerm(term:string, interval:string) {
     return this._http.get(this.serviceBase + 'api/staticdata/equitytickersbyterm/' + term + '/' + interval)
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
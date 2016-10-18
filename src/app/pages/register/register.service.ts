import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RegistrationModel } from '../../model/registrationModel'
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class RegistrationService {
  constructor(private _http: Http) {

  }

  register(registrationModel: RegistrationModel): Observable<any> {
    let serviceBase = 'https://localhost:44300';
    return this._http.post(serviceBase + '/api/account/register', registrationModel)
      .catch(this.handleError);
  }

  waitRedirect() : Observable<any> {
     
     return Observable.of(true);
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
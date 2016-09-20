import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthenticationService
{
    constructor(private _http: Http) {

    }

    login(email: string, password: string) : Observable<any> {
        let serviceBase = '';
        let getTokenString =
        'grant_type=password&username=' + email + '&password=' + password;

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('https://localhost:44300' + '/token', getTokenString)
        .catch(this.handleError);
    }

    private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}
}

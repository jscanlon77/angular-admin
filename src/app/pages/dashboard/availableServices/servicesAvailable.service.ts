import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, colorHelper } from '../../../theme';
import { Http } from '@angular/http';

@Injectable()
export class ServicesAvailableService {

  constructor(private _baConfig:BaThemeConfigProvider, private _http:Http) {
  }

  getData() {
    // make an observable http call to get the status of all
    // the Services
    // such as Connected Service, FactSetService, Morningstar Service
    // etc.
    // return as a JSON array
    //this._http.
        return new Array<Object>();
    }
}

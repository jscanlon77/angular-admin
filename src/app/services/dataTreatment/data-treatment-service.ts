import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataTreatmentService {
  private serviceBase = 'https://localhost:44300';
  constructor(private _http: Http) {

  }

  getEquities(): Observable<any> {
    var dataTreatmentOptions = ["INSTITUTION", "FUND", "HYBRID"];
    return Observable.create(dataTreatmentOptions)
  }

}
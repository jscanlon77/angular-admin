import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import { GlobalService } from '../../globals'
import { Holder } from '../../model/holder';
import { SelectItem } from 'primeng/primeng';

@Injectable()
export class InstitutionService {
    constructor(private _http: Http, private _globalService: GlobalService) {

    }

    getHoldersByEquityId(equityId: string): Observable<Holder[]> {
        return this._http.get(this._globalService.serviceHost + '/api/holdingsinfo/getHoldersByEquityId/' + equityId)
            .map(response => response.json())
            .catch(this.handleError);
    }

    getPeriods(): Array<SelectItem> {

        let tenors = new Array<SelectItem>();
        tenors.push({ label: 'Select Period', value: null });
        tenors.push({ label: '3M', value: "-3" });
        tenors.push({ label: '6M', value: "-6" });
        tenors.push({ label: '9M', value: "-9" });
        tenors.push({ label: '1Y', value: "-12" });
        return tenors;
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
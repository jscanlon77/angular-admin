import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import { SavePeerGroupModel } from '../../model/savePeerGroupModel';
import { GlobalService } from '../../globals'


@Injectable()
export class PeerGroupsService {
  private serviceBase = 'https://localhost:44300';
  constructor(private _http: Http, private _globalService:GlobalService) {

  }

  getPeerGroupsByEquity(equityId: string): Observable<any> {
    
    return this._http.get(this._globalService.serviceBase + 'api/staticdata/peergroups/' + equityId)
      .catch(this.handleError);
  }

  getPeerGroupsByUserId(username:string) {
     return this._http.get(this._globalService + 'api/staticdata/peergroupbyuser/' + username)
     .catch(this.handleError);
  }

  getPeerGroupsByEquityAndUserId(username:string, equityId:string) {
     return this._http.get(this._globalService.serviceBase + 'api/staticdata/peergroups/' + username + '/' + equityId)
     .catch(this.handleError);
  }

  savePeerGroupDetails(savePeerGroupModel: SavePeerGroupModel) {
     return this._http.post(this._globalService.serviceBase + 'api/staticdata/savePeerGroupDetails', savePeerGroupModel)
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
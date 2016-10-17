import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { AutoCompleteModel } from '../../../../model/autoCompleteModel';
import { InstitutionResultsModel } from '../../../../model/institutionResultsModel';
import { EquityTicker } from '../../../../model/equityTicker';
import { LocalStorageService } from 'angular-2-local-storage';
import { EquityService } from '../../../../services/equities/equity-service';
import { Header, Footer } from 'primeng/primeng';
import { ReportingBase } from '../../../../base/reportingBase';
import { DownloadService } from '../../../../services/downloads/download-service'

@Component({
  selector: 'peer-positions',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styles: [require('./peer-positions.scss'), require('./buttons.scss')],
  template: require('./peer-positions.html')
})

export class PeerPositions extends ReportingBase {

  results: EquityTicker[];
  private institutionResults: InstitutionResultsModel[] = new Array();
  private selectedInstitutions: InstitutionResultsModel[];
  private selectedEquityResult: EquityTicker;
  equityModel: EquityTicker;
  private username: string;
  private showHolderPositions: boolean;
  private resultLimit: string = '30';
  constructor(private _equityService: EquityService,
    private _localStorage: LocalStorageService, private _downloadService: DownloadService) {

    super();
    let loginDetails = this._localStorage.get('loginDetails');
    this.username = loginDetails['userName'];
    this.showHolderPositions = false;

    let institutionResult = new InstitutionResultsModel("something", 23.45, 345.45, "1");

    this.institutionResults.push(institutionResult);
    let institutionResult2 = new InstitutionResultsModel("something1", 23.45, 345.45, "1");
    this.institutionResults.push(institutionResult2);
  }

  /*
    this method needs to get all the reportable equities which we have retrieved
    with the isCalculable Equities.
  */

  findEquityMatches(event) {    
    let equityValue = <string>event.query;
    this._equityService.getEquityListByTerm(equityValue, this.resultLimit).subscribe(res => {
      this.results = res;
    })
  }

  selectedEquity(value) {
    this.selectedEquityResult = value;


  }

  onRowUnselect(event) {
    let selected = this.selectedInstitutions;
  }

  onRowSelect(event) {
    let selected = this.selectedInstitutions;
  }

  export(value) {
    var json = JSON.stringify(this.selectedInstitutions);

    // we need to popup a dialog box here and allow user to select a filename so that the download service can export it.
    //this._downloadService.jsonToExcel(json, fileEx)
  }

}
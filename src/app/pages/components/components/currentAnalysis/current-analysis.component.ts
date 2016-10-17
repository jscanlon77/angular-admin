import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { AutoCompleteModel } from '../../../../model/autoCompleteModel';
import { InstitutionResultsModel } from '../../../../model/institutionResultsModel';
import { LocalStorageService } from 'angular-2-local-storage';
import { EquityService } from '../../../../services/equities/equity-service';
import { Header, Footer } from 'primeng/primeng';
import { ReportingBase } from '../../../../base/reportingBase';
import { DownloadService } from '../../../../services/downloads/download-service'

@Component({
  selector: 'current-analysis',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styles: [require('./current-analysis.scss'), require('./buttons.scss')],
  template: require('./current-analysis.html')
})

export class CurrentAnalysis extends ReportingBase {

  private results: AutoCompleteModel[];
  private institutionResults: InstitutionResultsModel[] = new Array();
  private selectedInstitutions: InstitutionResultsModel[];
  private selectedEquityResult: AutoCompleteModel;
  private equityModel: AutoCompleteModel;
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
    this._equityService.getEquityListByTerm(equityValue, this.resultLimit).subscribe(res => res => {
      this.results = res;
    })
  }

  selectedEquity(value) {
    this.selectedEquityResult = value;


  }

  onRowSelect(event) {
    let selected = this.selectedInstitutions;
  }

  export(value)
  {
      var json = JSON.stringify(this.selectedInstitutions);
      //this._downloadService.jsonToExcel(data:json, fileEx)
  }

}
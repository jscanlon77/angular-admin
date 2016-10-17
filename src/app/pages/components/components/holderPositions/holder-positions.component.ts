import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { AutoCompleteModel } from '../../../../model/autoCompleteModel';
import { EquityTicker } from '../../../../model/equityTicker';
import { Holder } from '../../../../model/holder';
import { LocalStorageService } from 'angular-2-local-storage';
import { EquityService } from '../../../../services/equities/equity-service';
import { InstitutionService } from '../../../../services/institutions/institution-service';
import { Header, Footer, SelectItem } from 'primeng/primeng';
import { ReportingBase } from '../../../../base/reportingBase';
import { DownloadService } from '../../../../services/downloads/download-service'


@Component({
  selector: 'holder-positions',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styles: [require('./holder-positions.scss'), require('./buttons.scss')],
  template: require('./holder-positions.html')
})

export class HolderPositions extends ReportingBase {

  private results: EquityTicker[];
  private selectedTenor: SelectItem;
  private institutionResults: Holder[] = new Array();
  private selectedInstitutions: Holder[];
  private tenors: SelectItem[];
  private historicCheck: boolean;
  private startDate: string;
  private selectedEquityResult: EquityTicker;
  private equityModel: EquityTicker;
  private username: string;
  private showHolderPositions: boolean;
  private resultLimit: string = '30';
  constructor(private _equityService: EquityService,
    private _localStorage: LocalStorageService,
    private _downloadService: DownloadService,
    private _institutionService: InstitutionService) {

    super();
    let loginDetails = this._localStorage.get('loginDetails');
    this.username = loginDetails['userName'];
    this.showHolderPositions = false;

    this.tenors = this._institutionService.getPeriods();
    this.selectedTenor = this.tenors[0];

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

  selectedEquity(event) {

    if (event === null) {
      this.showHolderPositions = false;
    }
    else {
      this.showHolderPositions = true;
      // we need to get the id and then get all the instititions which hold the equity
      // passing in the startdate and the end date if provided and if not just the 
      // equity id.
      let equityId = event.EquityId;

      this.institutionResults = [];
      this._institutionService.getHoldersByEquityId(equityId).subscribe(resu => {

        // and then load them all into the grid
        for (let holderEntry of resu) {
          this.institutionResults.push(holderEntry)
        }
      });
    }
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
    // get me the current time so that we can append it to the date...
    let currentDate = new Date().getMilliseconds;
    this._downloadService.jsonToExcel(json, ".xlsx", "HoldingsDownload" + currentDate);
  }

}
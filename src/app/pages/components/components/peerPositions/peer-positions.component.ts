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

  private primaryResults: EquityTicker[];
  private secondaryEquityResults: EquityTicker[];
  private institutionResults: InstitutionResultsModel[] = new Array();
  private selectedInstitutions: InstitutionResultsModel[];
  private selectedPrimaryEquityResult: EquityTicker;
  private selectedSecondaryEquityResult : EquityTicker;
  private primaryEquityModel: EquityTicker;
  private secondaryEquityModel : EquityTicker;
  private username: string;
  private showHolderPositions: boolean;
  private showSecondaryTickerSelect: boolean;
  private resultLimit: string = '30';
  constructor(private _equityService: EquityService,
    private _localStorage: LocalStorageService, private _downloadService: DownloadService) {

    super();
    let loginDetails = this._localStorage.get('loginDetails');
    this.username = loginDetails['userName'];
    this.showHolderPositions = false;
    this.showSecondaryTickerSelect = false;
  }

  /*
    this method needs to get all the reportable equities which we have retrieved
    with the isCalculable Equities.
  */

  findPrimaryEquityMatches(event) {    
    let equityValue = <string>event.query;
    this._equityService.getEquityListByTerm(equityValue, this.resultLimit).subscribe(res => {
      this.primaryResults = res;
    })
  }

  findSecondaryEquityMatches(event) {    
    let equityValue = <string>event.query;
    this._equityService.getSecondaryEquityListByTerm(equityValue, this.resultLimit, this.selectedPrimaryEquityResult.EquityId).subscribe(res => {
      this.secondaryEquityResults = res;
    })
  }

  selectedPrimaryEquity(value) {
    this.selectedPrimaryEquityResult = value;
    this.showSecondaryTickerSelect = true;

  }

  selectedSecondaryEquity(value)
  {
     this.selectedSecondaryEquityResult = value;
  }



  onRowUnselect(event) {
    let selected = this.selectedInstitutions;
  }

  onRowSelect(event) {
    let selected = this.selectedInstitutions;
  }

  export(value) {

    
    let customEquityHeader = "InstitutionName";
    let institutionResultsHeaders = [
    
    {
      label: customEquityHeader, 
      value: 'InstitutionName', 
      default: 'NULL' 
    },
 
    {
      label: 'Position Date',
      value: 'PositionDate', 
      default: 'NULL' 
    },
    {
      label: 'Position',
      value: 'Position', 
      default: 'NULL' 
    },
  ]


    
    let customInstitutionResultsHeaders = ['Ticker', customEquityHeader, 'PositionDate', 'Position'];
    let currentDate = new Date().getMilliseconds();
    this._downloadService.jsonToExcel(this.institutionResults, institutionResultsHeaders, ".csv", "HoldingsDownload" + currentDate);
  }

}
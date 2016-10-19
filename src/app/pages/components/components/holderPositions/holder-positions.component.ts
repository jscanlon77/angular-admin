import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { EquityTicker } from '../../../../model/equityTicker';
import { Holder } from '../../../../model/holder';
import { LocalStorageService } from 'angular-2-local-storage';
import { EquityService } from '../../../../services/equities/equity-service';
import { PositionsService } from '../../../../services/institutions/positions-service';
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
  private selectedTenor: string;
  private institutionResults: Holder[] = new Array();
  private selectedInstitutions: Holder[];
  private tenors: SelectItem[];
  private historicCheck: boolean;
  private currentEquityTicker: string;
  private startDate: string;
  private selectedEquityResult: EquityTicker;
  private currentEquityId: string;
  private equityModel: EquityTicker;
  private username: string;
  private showHolderPositions: boolean;
  private resultLimit: string = '30';
  constructor(private _equityService: EquityService,
    private _localStorage: LocalStorageService,
    private _downloadService: DownloadService,
    private _positionsService: PositionsService) {

    super();
    let loginDetails = this._localStorage.get('loginDetails');
    this.username = loginDetails['userName'];
    this.showHolderPositions = false;

    this.tenors = this._positionsService.getPeriods();
    this.selectedTenor = this.tenors[0].value;

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

  tenorChanged(event) {
    if (event.value !== null) {
      this.institutionResults = [];
      let selectedTenor = this.selectedTenor;
      this._positionsService.getCalculatedPositions(this.currentEquityId, selectedTenor).subscribe(resu => {

        // and then load them all into the grid
        for (let holderEntry of resu) {
          this.institutionResults.push(holderEntry)
        }
      });

    }
  }

  historicCheckChanged(event) {
    if (!this.historicCheck) {
      this.selectedTenor = this.tenors[0].value;
      this.institutionResults = [];
      this._positionsService.getCalculatedPositions(this.currentEquityId, "0").subscribe(resu => {

        // and then load them all into the grid
        for (let holderEntry of resu) {
          this.institutionResults.push(holderEntry)
        }
      });
    }
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
      this.currentEquityId = event.EquityId;
      this.currentEquityTicker = event.EquityTickerRegion;
      this.institutionResults = [];

      if (this.selectedTenor === null) {
        this.selectedTenor = null;
      }

      this._positionsService.getCalculatedPositions(this.currentEquityId, this.selectedTenor).subscribe(resu => {

        // and then load them all into the grid
        for (let holderEntry of resu) {
          this.institutionResults.push(holderEntry)
        }
      });
    }
  }

  onUnselectEquity(event) {
    let unselect = event;
  }

  onRowUnselect(event) {
    let selected = this.selectedInstitutions;
  }

  onRowSelect(event) {
    let selected = this.selectedInstitutions;
  }

  export(value) {

    //let institutionResultsHeaders = ["InstitutionName", "PositionDate", "Position"];
    let customEquityHeader = "InstitutionName for " + this.currentEquityTicker;
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


    
    let customInstitutionResultsHeaders = [customEquityHeader, 'PositionDate', 'Position'];
    let currentDate = new Date().getMilliseconds();
    this._downloadService.jsonToExcel(this.institutionResults, institutionResultsHeaders, ".csv", "HoldingsDownload" + currentDate);
  }

  

}
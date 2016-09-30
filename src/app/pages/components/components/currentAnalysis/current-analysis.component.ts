import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { AutoCompleteModel } from '../../../../model/autoCompleteModel';
import { InstitutionResultsModel } from '../../../../model/institutionResultsModel';
import { LocalStorageService } from 'angular-2-local-storage';
import { EquityService } from '../../../../services/equities/equity-service';
import { Header, Footer } from 'primeng/primeng';



@Component({
  selector: 'current-analysis',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styles: [require('./current-analysis.scss'), require('./buttons.scss')],
  template: require('./current-analysis.html')
})

export class CurrentAnalysis {

  private results: AutoCompleteModel[];
  private institutionResults: InstitutionResultsModel[] = new Array();
  private selectedEquityResult: AutoCompleteModel;
  private equityModel: AutoCompleteModel;
  private username:string;
  private showHolderPositions: boolean;
  private resultLimit: string = "30";
  constructor(private _equityService: EquityService, private _localStorage: LocalStorageService) {

    let loginDetails = this._localStorage.get('loginDetails');
    this.username = loginDetails['userName'];
    this.showHolderPositions = false;

    let institutionResult = new InstitutionResultsModel("something", 23.45, 345.45, "1")
    this.institutionResults.push(institutionResult)
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
    
    // so when we select the equity we then need to pass this on to whatever is going to call the code to populate the 
    // holders by institution and their positions
  }

}
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { AutoCompleteCombo } from '../../../../controls/autocomplete/autocomplete-combo';
import { routing }       from './current-analysis.routing';
import { CurrentAnalysis } from './current-analysis.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    CurrentAnalysis],
  providers: [AutoCompleteCombo ]
})
export default class CurrentAnalysisModule {
}
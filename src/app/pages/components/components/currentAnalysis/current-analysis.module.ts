import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing }       from './current-analysis.routing';
import { CurrentAnalysis } from './current-analysis.component';
import { SplitButtonModule} from 'primeng/primeng';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    SplitButtonModule,
    routing
  ],
  declarations: [
    CurrentAnalysis, ]
})
export default class CurrentAnalysisModule {
}

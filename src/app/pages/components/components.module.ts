import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { SplitButtonModule, AutoCompleteModule, DataGridModule, DataTableModule,SharedModule } from 'primeng/primeng';
import { routing }       from './components.routing';
import { Components } from './components.component';
import { CurrentAnalysis } from './components/currentAnalysis/current-analysis.component';
import { EquityService } from '../../services/equities/equity-service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    SplitButtonModule,
    AutoCompleteModule,
    DataGridModule,
    DataTableModule,
    SharedModule,
    routing
  ],
  declarations: [
    Components,
    CurrentAnalysis
  ],
  providers: [
    EquityService
  ]
})
export default class ComponentsModule {}

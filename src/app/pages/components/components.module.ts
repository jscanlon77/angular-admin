import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './components.routing';
import { Components } from './components.component';
import { CurrentAnalysis } from './components/currentAnalysis/current-analysis.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Components,
    CurrentAnalysis
  ]
})
export default class ComponentsModule {}

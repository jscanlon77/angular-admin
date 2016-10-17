import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing }       from './holder-positions.routing';
import { HolderPositions } from './holder-positions.component';
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
    HolderPositions, ]
})
export default class HolderPositionsModule {
}

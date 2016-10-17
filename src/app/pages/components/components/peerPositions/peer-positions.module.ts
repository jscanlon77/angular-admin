import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing }       from './peer-positions.routing';
import { PeerPositions } from './peer-positions.component';
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
    PeerPositions, ]
})
export default class PeerPositionsModule {
}

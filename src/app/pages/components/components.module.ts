import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { SplitButtonModule, AutoCompleteModule, DataGridModule, DataTableModule,SharedModule, CheckboxModule, CalendarModule, DropdownModule, ListboxModule } from 'primeng/primeng';
import { routing }       from './components.routing';
import { Components } from './components.component';
import { HolderPositions } from './components/holderPositions/holder-positions.component';
import { PeerPositions } from './components/peerPositions/peer-positions.component';
import { EquityService } from '../../services/equities/equity-service';
import { PositionsService } from '../../services/institutions/positions-service';
import { DownloadService } from '../../services/downloads/download-service'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    SplitButtonModule,
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    DataGridModule,
    DataTableModule,
    ListboxModule,
    DropdownModule,
    SharedModule,
    routing
  ],
  declarations: [
    Components,
    HolderPositions,
    PeerPositions
  ],
  providers: [
    EquityService,
    DownloadService,
    PositionsService
  ]
})
export default class ComponentsModule {}

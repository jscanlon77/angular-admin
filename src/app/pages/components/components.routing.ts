import { Routes, RouterModule }  from '@angular/router';

import { Components } from './components.component';
import { HolderPositions } from './components/holderPositions/holder-positions.component';
import { PeerPositions } from './components/peerPositions/peer-positions.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Components,
    children: [
      { path: 'holder-positions', component:HolderPositions },
       { path: 'peer-positions', component:PeerPositions },
    ]
  }
];

export const routing = RouterModule.forChild(routes);

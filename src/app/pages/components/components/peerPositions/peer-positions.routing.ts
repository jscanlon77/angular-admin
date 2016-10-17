import { Routes, RouterModule }  from '@angular/router';
import { AuthorisationGuard } from '../../authorisation.guard';
import { PeerPositions } from './peer-positions.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'peer-positions', canActivate: [AuthorisationGuard],
    component: PeerPositions
  }
];

export const routing = RouterModule.forChild(routes);
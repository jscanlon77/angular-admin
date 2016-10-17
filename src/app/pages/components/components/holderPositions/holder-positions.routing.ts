import { Routes, RouterModule }  from '@angular/router';
import { AuthorisationGuard } from '../../authorisation.guard';
import { HolderPositions } from './holder-positions.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'holder-positions', canActivate: [AuthorisationGuard],
    component: HolderPositions
  }
];

export const routing = RouterModule.forChild(routes);
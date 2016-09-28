import { Routes, RouterModule }  from '@angular/router';
import { AuthorisationGuard } from '../../authorisation.guard';
import { CurrentAnalysis } from './current-analysis.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'current-analysis', canActivate: [AuthorisationGuard],
    component: CurrentAnalysis
  }
];

export const routing = RouterModule.forChild(routes);
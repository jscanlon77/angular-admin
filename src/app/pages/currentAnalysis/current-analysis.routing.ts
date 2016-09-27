import { Routes, RouterModule }  from '@angular/router';
import { AuthorisationGuard } from '../../authorisation.guard';
import { CurrentAnalysis } from './current-analysis.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', canActivate: [AuthorisationGuard],
    component: CurrentAnalysis,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
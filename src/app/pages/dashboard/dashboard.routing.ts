import { Routes, RouterModule }  from '@angular/router';
import { AuthorisationGuard } from '../authorisation-guard';
import { Dashboard } from './dashboard.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', canActivate: [AuthorisationGuard],
    component: Dashboard,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);

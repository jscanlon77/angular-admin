import { Routes, RouterModule }  from '@angular/router';

import { Components } from './components.component';
import { CurrentAnalysis } from './components/currentAnalysis/current-analysis.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Components,
    children: [
      { path: 'current-analysis', component:CurrentAnalysis },
    ]
  }
];

export const routing = RouterModule.forChild(routes);

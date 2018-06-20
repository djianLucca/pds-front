import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartupListComponent } from './pages/startup-list/startup-list.component';
import { StartupFormComponent } from './pages/startup-form/startup-form.component';
import { StartupModelComponent } from './pages/startup-model/startup-model.component';

const routes: Routes = [
  {
    path: '',
    component: StartupListComponent
  },
  {
    path: 'form',
    component: StartupFormComponent
  },
  {
    path: 'model',
    component: StartupModelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartupRoutingModule { }

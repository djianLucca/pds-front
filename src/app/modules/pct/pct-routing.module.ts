import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PctListComponent } from './pages/pct-list/pct-list.component';
import { PctFormComponent } from './pages/pct-form/pct-form.component';

const routes: Routes = [
  {
    path: '',
    component: PctListComponent
  },
  {
    path: 'form',
    component: PctFormComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PctRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmmModelListComponent } from './pages/smm-model-list/smm-model-list.component';
import { SmmModelFormComponent } from './pages/smm-model-form/smm-model-form.component';

const routes: Routes = [
  {
    path: '',
    component: SmmModelListComponent
  },
  {
    path: 'form',
    component: SmmModelFormComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmmModelRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelListComponent } from './pages/model-list/model-list.component';
import { ModelFormComponent } from './pages/model-form/model-form.component';

const routes: Routes = [
  {
    path: '',
    component: ModelListComponent
  },
  {
    path: 'form',
    component: ModelFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule { }

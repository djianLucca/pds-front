import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelListComponent } from './pages/model-list/model-list.component';

const routes: Routes = [
  {
    path: '',
    component: ModelListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule { }

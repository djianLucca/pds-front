import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelRoutingModule } from './model-routing.module';
import { ModelListComponent } from './pages/model-list/model-list.component';
import { MatTableModule, MatButtonModule } from '@angular/material';
import { ModelFormComponent } from './pages/model-form/model-form.component';

@NgModule({
  imports: [
    CommonModule,
    ModelRoutingModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [ModelListComponent, ModelFormComponent]
})
export class ModelModule { }

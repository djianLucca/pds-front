import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PctRoutingModule } from './pct-routing.module';
import { PctListComponent } from './pages/pct-list/pct-list.component';
import { PctFormComponent } from './pages/pct-form/pct-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PctRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [PctListComponent, PctFormComponent]
})
export class PctModule { }

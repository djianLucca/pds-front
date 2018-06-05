import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartupRoutingModule } from './startup-routing.module';
import { StartupListComponent } from './pages/startup-list/startup-list.component';
import { StartupService } from '../../shared/services/startup.service';
import { StartupFormComponent } from './pages/startup-form/startup-form.component';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    StartupRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StartupService],
  declarations: [StartupListComponent, StartupFormComponent]
})
export class StartupModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartupRoutingModule } from './startup-routing.module';
import { StartupListComponent } from './pages/startup-list/startup-list.component';
import { StartupService } from '../../shared/services/startup.service';
import { StartupFormComponent } from './pages/startup-form/startup-form.component';
import { 
  MatTableModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatSelectModule, 
  MatButtonModule, 
  MatIconModule, 
  MatTabsModule, 
  MatProgressBarModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StartupModelComponent } from './pages/startup-model/startup-model.component';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  imports: [
    CommonModule,
    StartupRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [StartupService],
  declarations: [StartupListComponent, StartupFormComponent, StartupModelComponent]
})
export class StartupModule { }

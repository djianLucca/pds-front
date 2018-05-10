import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { StartupRoutingModule } from './startup-routing.module';
import { StartupListComponent } from './pages/startup-list/startup-list.component';

@NgModule({
  imports: [
    CommonModule,
    StartupRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [StartupListComponent]
})
export class StartupModule { }

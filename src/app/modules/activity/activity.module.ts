import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './pages/activity/activity.component';

import { MatInputModule, MatSelectModule, MatIconModule, MatButtonModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ActivityRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule
  ],
  declarations: [ActivityComponent]
})
export class ActivityModule { }

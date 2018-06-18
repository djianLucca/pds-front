import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './activity-list.component';

import { FormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule, MatIconModule, MatButtonModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
  ],
  exports: [ActivityListComponent],
  declarations: [ActivityListComponent]
})
export class ActivityListModule { }

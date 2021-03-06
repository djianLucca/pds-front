import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmmModelRoutingModule } from './smm-model-routing.module';
import { SmmModelFormComponent } from './pages/smm-model-form/smm-model-form.component';
import { SmmModelListComponent, DialogOverviewExampleDialog } from './pages/smm-model-list/smm-model-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatButtonModule, MatSelectModule, MatButtonToggleModule, MatIconModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatTabsModule, MatProgressBarModule } from '@angular/material';
import { ActivityListModule } from '../../shared/components/activity-list/activity-list.module';

@NgModule({
  imports: [
    CommonModule,
    SmmModelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    ActivityListModule
  ],
  providers:[
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  declarations: [SmmModelFormComponent, SmmModelListComponent, DialogOverviewExampleDialog],
  entryComponents: [DialogOverviewExampleDialog]
})
export class SmmModelModule { }

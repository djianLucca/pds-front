import { StartupModelService } from './startup-model.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacadeService } from './facade.service';

import { ActivityService } from './activity.service';
import { ActivityTypeService } from './activity-type.service';
import { AreaService } from './area.service';
import { ChartService } from './chart.service';
import { BaseService } from './base.service';
import { DimensionService } from './dimension.service';
import { SmmModelService } from './smm-model.service';
import { PctService } from './pct.service';
import { PhaseService } from './phase.service';
import { StartupService } from './startup.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    FacadeService,
    ActivityService,
    ActivityTypeService,
    AreaService,
    BaseService,
    ChartService,
    DimensionService,
    SmmModelService,
    PctService,
    PhaseService,
    StartupService,
    StartupModelService
  ]
})
export class ServicesModule { }

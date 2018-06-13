import { PhaseService } from './phase.service';
import { DimensionService } from './dimension.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacadeService } from './facade.service';

import { StartupService } from './startup.service';
import { BaseService } from './base.service';
import { AreaService } from './area.service';
import { ModelService } from './model.service';
import { ActivityService } from './activity.service';
import { ActivityTypeService } from './activity-type.service';

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
    DimensionService,
    ModelService,
    PhaseService,
    StartupService
  ]
})
export class ServicesModule { }

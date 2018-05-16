import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacadeService } from './facade.service';

import { StartupService } from './startup.service';
import { BaseService } from './base.service';
import { AreaService } from './area.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    FacadeService,

    BaseService,
    StartupService,
    AreaService
  ]
})
export class ServicesModule { }

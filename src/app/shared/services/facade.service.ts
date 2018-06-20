import { StartupModelService } from './startup-model.service';
import { Injectable, Injector } from '@angular/core';

import { AuthService } from './../auth/auth.service';

import { ActivityService } from './activity.service';
import { ActivityTypeService } from './activity-type.service';
import { AreaService } from './area.service';
import { DimensionService } from './dimension.service';
import { SmmModelService } from './smm-model.service';
import { PctService } from './pct.service';
import { PhaseService } from './phase.service';
import { StartupService } from './startup.service';

@Injectable()
export class FacadeService {
  
  private _activityService: ActivityService;
  private get activityService(): ActivityService {
    if(!this._activityService){
      this._activityService = this.injector.get(ActivityService);
    }
    return this._activityService;
  }
  
  private _activityTypeService: ActivityTypeService;
  private get activityTypeService(): ActivityTypeService {
    if(!this._activityTypeService){
      this._activityTypeService = this.injector.get(ActivityTypeService);
    }
    return this._activityTypeService;
  }
  
  private _areaService: AreaService;
  private get areaService(): AreaService {
    if(!this._areaService){
      this._areaService = this.injector.get(AreaService);
    }
    return this._areaService;
  }
  
  private _dimensionSevice: DimensionService;
  private get dimensionSevice(): DimensionService {
    if(!this._dimensionSevice){
      this._dimensionSevice = this.injector.get(DimensionService);
    }
    return this._dimensionSevice;
  }
  
  private _pctService: PctService;
  private get pctService(): PctService {
    if(!this._pctService){
      this._pctService = this.injector.get(PctService);
    }
    return this._pctService;
  }
  
  private _phaseService: PhaseService;
  private get phaseService(): PhaseService {
    if(!this._phaseService){
      this._phaseService = this.injector.get(PhaseService);
    }
    return this._phaseService;
  }
  
  private _smmModelService: SmmModelService;
  private get smmModelService(): SmmModelService {
    if(!this._smmModelService){
      this._smmModelService = this.injector.get(SmmModelService);
    }
    return this._smmModelService;
  }
  
  private _startupModelService: StartupModelService;
  private get startupModelService(): StartupModelService {
    if(!this._startupModelService){
      this._startupModelService = this.injector.get(StartupModelService);
    }
    return this._startupModelService;
  }
  
  private _startupService: StartupService;
  private get startupService(): StartupService {
    if(!this._startupService){
      this._startupService = this.injector.get(StartupService);
    }
    return this._startupService;
  }
  
  constructor(private injector: Injector) {  }

  // Activity Service
  getActivities(){return this.activityService.get()}
  getActivitiesByPhase(phaseId){return this.activityService.getByPhase(phaseId)}
  postActivity(activity){return this.activityService.post(activity)}
  deleteActivity(activity){return this.activityService.delete(activity)}

  // Activity Type Service
  getActivitiesTypes(){return this.activityTypeService.get()}

  // Area Service
  getAreas(){return this.areaService.get()}

  // Dimension Service
  getDimensions(){return this.dimensionSevice.get()}

  // Model Service
  getSmmModels(){return this.smmModelService.get()}
  getSmmModelsByPct(pctId){return this.smmModelService.getByPct(pctId)}
  getSmmModelActivities(smmModelId){return this.smmModelService.getActivities(smmModelId)}
  getSmmModelActionPlans(smmModelId){return this.smmModelService.getActionPlans(smmModelId)}
  postSmmModel(smmModel){return this.smmModelService.post(smmModel)}
  deleteSmmModel(smmModelId){return this.smmModelService.delete(smmModelId)}

  // Pct Service
  getPcts(){return this.pctService.get()}
  getPctsById(id){return this.pctService.getById(id)}
  postPct(pct){return this.pctService.post(pct)}
  putPct(pct){return this.pctService.put(pct)}
  deletePct(id){return this.pctService.delete(id)}

  // Phase Service
  getPhases(){return this.phaseService.get()}

  // Startup Service
  getStartups(){return this.startupService.get()}
  getStartupsById(id){return this.startupService.getById(id)}
  postStartup(startup){return this.startupService.post(startup)}
  putStartup(startup){return this.startupService.put(startup)}
  deleteStartup(id){return this.startupService.delete(id)}

  // Startup Model Service
  getStartupModel(id){return this.startupModelService.get(id)}
  postStartupModel(startupModel, startupId){return this.startupModelService.post(startupModel, startupId)}

}

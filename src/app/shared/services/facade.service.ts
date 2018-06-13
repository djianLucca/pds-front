import { ActivityService } from './activity.service';
import { PhaseService } from './phase.service';
import { DimensionService } from './dimension.service';
import { ActivityTypeService } from './activity-type.service';
import { AuthService } from './../auth/auth.service';
import { StartupService } from './startup.service';
import { Injectable, Injector } from '@angular/core';
import { AreaService } from './area.service';
import { ModelService } from './model.service';

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
  
  private _modelService: ModelService;
  private get modelService(): ModelService {
    if(!this._modelService){
      this._modelService = this.injector.get(ModelService);
    }
    return this._modelService;
  }
  
  private _phaseService: PhaseService;
  private get phaseService(): PhaseService {
    if(!this._phaseService){
      this._phaseService = this.injector.get(PhaseService);
    }
    return this._phaseService;
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
  postActivity(activity){return this.activityService.post(activity)}

  // Activity Type Service
  getActivitiesTypes(){return this.activityTypeService.get()}

  // Area Service
  getAreas(){return this.areaService.get()}

  // Dimension Service
  getDimensions(){return this.dimensionSevice.get()}

  // Model Service
  getModels(){return this.modelService.get()}

  // Model Service
  getPhases(){return this.phaseService.get()}

  // Startup Service
  getStartups(){return this.startupService.get()}
  getStartupsById(id){return this.startupService.getById(id)}
  postStartup(startup){return this.startupService.post(startup)}
  putStartup(startup){return this.startupService.put(startup)}
  deleteStartup(id){return this.startupService.delete(id)}

}

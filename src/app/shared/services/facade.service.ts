import { AuthService } from './../auth/auth.service';
import { StartupService } from './startup.service';
import { Injectable, Injector } from '@angular/core';
import { AreaService } from './area.service';

@Injectable()
export class FacadeService {
  
  private _startupService: StartupService;
  private get startupService(): StartupService {
    if(!this._startupService){
      this._startupService = this.injector.get(StartupService);
    }
    return this._startupService;
  }
  
  private _areaService: AreaService;
  private get areaService(): AreaService {
    if(!this._areaService){
      this._areaService = this.injector.get(AreaService);
    }
    return this._areaService;
  }
  
  constructor(private injector: Injector) {  }

  // Startup Service
  getStartups(){return this.startupService.get()}
  getStartupsById(id){return this.startupService.getById(id)}
  postStartup(startup){return this.startupService.post(startup)}
  deleteStartup(id){return this.startupService.delete(id)}

  //Area Service
  getAreas(){return this.areaService.get()}
}

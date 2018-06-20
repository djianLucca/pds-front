import { IStartupModel } from './../../interfaces/startup-model';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StartupModelService {

  url = 'startup-model';

  constructor(private baseService: BaseService) { }

  get(id){
    return this.baseService.getWithParams(this.url, id);
  }

  getById(id: string){
    return this.baseService.getById(this.url, id);
  }

  post(startupModel: IStartupModel, startupId){
    let url = this.url + '/' + startupId;
    return this.baseService.post(url, startupModel);
  }

  put(startupModel: IStartupModel){
    const url = this.url + '/' + startupModel.id
    return this.baseService.put(url, startupModel);
  }

  delete(id: string){
    return this.baseService.delete(this.url, id);
  }
}

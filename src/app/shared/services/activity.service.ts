import { IActivity } from './../../interfaces/activity';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable()
export class ActivityService {

  url = 'activity';

  constructor(private baseService: BaseService) { }

  get(){
    return this.baseService.get(this.url);
  }

  getById(id: string){
    return this.baseService.getById(this.url, id);
  }

  getByPhase(phaseId){
    let params = 'phase/' + phaseId;
    return this.baseService.getWithParams(this.url, params);
  }

  post(activity: IActivity){
    return this.baseService.post(this.url, activity);
  }

  put(activity: IActivity){
    const url = this.url + '/' + activity.id
    return this.baseService.put(url, activity);
  }

  delete(id: string){
    return this.baseService.delete(this.url, id);
  }
}

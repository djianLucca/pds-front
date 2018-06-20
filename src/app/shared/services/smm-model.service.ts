import { ISmmModel } from './../../interfaces/smm-model';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable()
export class SmmModelService {

  url = 'smm-model';
  urlActionPlan = 'action-plan/'

  constructor(private baseService: BaseService) { }

  get(){
    return this.baseService.get(this.url);
  }

  getByPct(pctId){
    let params = '/pct/' + pctId;
    return this.baseService.getWithParams(this.url, params);
  }

  getActivities(smmModelId){
    let url = this.urlActionPlan + 'model';
    return this.baseService.getWithParams(url, smmModelId)
  }

  getActionPlans(smmModelId){
    let url = this.urlActionPlan + 'startup';
    return this.baseService.getWithParams(url, smmModelId)
  }

  getById(id: string){
    return this.baseService.getById(this.url, id);
  }

  post(pct: ISmmModel){
    return this.baseService.post(this.url, pct);
  }

  put(pct: ISmmModel){
    const url = this.url + '/' + pct.id
    return this.baseService.put(url, pct);
  }

  delete(id: string){
    return this.baseService.delete(this.url, id);
  }
}

import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable()
export class ActivityTypeService {

  url = 'activity-type';

  constructor(private baseService: BaseService) { }

  get(){
    return this.baseService.get(this.url);
  }

  getById(id: string){
    return this.baseService.getById(this.url, id);
  }
}

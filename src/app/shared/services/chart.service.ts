import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable()
export class ChartService {

  url = 'chart';

  constructor(private baseService: BaseService) { }

  get(startupId, isDone = false){
    let params = isDone ? `${startupId}/true` : startupId
    return this.baseService.getWithParams(this.url, params);
  }
}

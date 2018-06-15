import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IPct } from '../../interfaces/pct';

@Injectable()
export class PctService {

  url = 'pct';

  constructor(private baseService: BaseService) { }

  get(){
    return this.baseService.get(this.url);
  }

  getById(id: string){
    return this.baseService.getById(this.url, id);
  }

  post(pct: IPct){
    return this.baseService.post(this.url, pct);
  }

  put(pct: IPct){
    const url = this.url + '/' + pct.id
    return this.baseService.put(url, pct);
  }

  delete(id: string){
    return this.baseService.delete(this.url, id);
  }
}

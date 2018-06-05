import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { IStartup } from '../../interfaces/startup';

@Injectable()
export class StartupService {

  url = 'startup';

  constructor(private baseService: BaseService) { }

  get(){
    return this.baseService.get(this.url);
  }

  getById(id: string){
    return this.baseService.getById(this.url, id);
  }

  post(startup: IStartup){
    return this.baseService.post(this.url, startup);
  }

  put(startup: IStartup){
    const url = this.url + '/' + startup.id
    return this.baseService.put(url, startup);
  }

  delete(id: string){
    return this.baseService.delete(this.url, id);
  }
}

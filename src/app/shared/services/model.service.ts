import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable()
export class ModelService {

  url = 'model';

  constructor(private baseService: BaseService) { }

  get(){
    console.log(this.baseService.get('area'));
  }
}

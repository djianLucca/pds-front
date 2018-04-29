import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { BaseService } from './../../shared/services/base.service';

@Injectable()
export class LoginService {

  url = 'login';

  constructor(private _baseService: BaseService) { }

  login(data): Observable<any> {
    return this._baseService.post(this.url, data);
  }

}

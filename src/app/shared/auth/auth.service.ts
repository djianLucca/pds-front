import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JwtHelper } from 'angular2-jwt';

import { BaseService } from '../services/base.service';
import { IPct } from '../../interfaces/pct';

@Injectable()
export class AuthService {

  constructor(private _baseService: BaseService) { }

  login(data): Observable<any> {
    return this._baseService.post('login', data);
  }

  signup(data): Observable<any> {
    return this._baseService.post('pct', data);
  }

  // token
  public set token(token: string) {
    localStorage.setItem('token', token);
  }

  public get token() {
    return localStorage.getItem('token');
  }

  public tokenRemove() {
    localStorage.removeItem('token');
  }

  public get tokenDecoded(): IPct {
    const jwtH = new JwtHelper();
    return jwtH.decodeToken(this.token);
  }

  public authenticated() {
    const jwtH = new JwtHelper();
    if (this.token) {
      return !jwtH.isTokenExpired(this.token);
    }

    return false;
  }

  public get is_admin() {
    return this.tokenDecoded.user.is_admin;
  }
}

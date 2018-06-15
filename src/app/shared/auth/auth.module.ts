import { AuthService } from './auth.service';
import { NgModule, Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._authService.token || '';
    const newRequest = req.clone({
    headers: req.headers.set('x-access-token', token),
  });

  return next.handle(newRequest);
  }
}

@NgModule({
  imports: [
  ],
  providers: [
   {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpsRequestInterceptor,
    multi: true,
   }
  ]
})
export class AuthModule { }
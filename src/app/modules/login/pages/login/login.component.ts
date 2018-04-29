import { Component, OnInit } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';

import { MAP_STYLE } from '../../../../shared/globals/constants';
import { ILogin } from './../../../../interfaces/login';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscription: ISubscription

  loginData: ILogin = {};

  //Map initial position
  lat = 0;
  lng = 0;
  zoom = 3;

  //Map style
  style = MAP_STYLE;

  constructor(private _login: LoginService) { }

  ngOnInit() {
    this.mapAnimation();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  //Make the map do a smooth animation
  mapAnimation(){ 
    const ms = 1000;
    const fps = 60;

    setInterval(()=>{
      if(this.lng > 360) this.lng = 0;
      this.lng += 0.1;
    }, ms / fps)
  }

  login(){
    this.subscription = this._login.login(this.loginData)
      .subscribe(res => console.log(res));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

import { MAP_STYLE } from '../../../../shared/globals/constants';
import { ILogin } from './../../../../interfaces/login';
import { AuthService } from './../../../../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Settings
  subscription: ISubscription
  formLogin: FormGroup

  loginData: ILogin = {};

  //Map initial position
  lat = 0;
  lng = 0;
  zoom = 3;

  //Map style
  style = MAP_STYLE;

  constructor(
    private _auth: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.mapAnimation();
    this.initForm();
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

  initForm(){
    this.formLogin = this._formBuilder.group({   
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(){
    if(this.formLogin.valid){
      this.subscription = this._auth.login(this.loginData)
        .subscribe(res => {
          if(res.token){
            this._auth.token = res.token;
            this._router.navigate(['/']);
          }
        });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ISubscription, Subscription } from 'rxjs/Subscription';

import { MAP_STYLE } from '../../../../shared/globals/constants';
import { ILogin } from './../../../../interfaces/login';
import { AuthService } from './../../../../shared/auth/auth.service';
import { IPct } from '../../../../interfaces/pct';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Settings
  subscription: ISubscription;

  formLogin: FormGroup
  formSignUp: FormGroup

  isLoginFormOn = true;

  loginData: ILogin = {};
  signUpData: IPct = { user: { person: {} } };

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
    this.initForms();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
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

  initForms(){
    this.initLoginForm();
    this.initSignUpForm();
  }

  initLoginForm(){
    this.formLogin = this._formBuilder.group({   
      emailLogin: ['', [Validators.required, Validators.email]],
      passwordLogin: ['', Validators.required]
    });
  }
  
  initSignUpForm(){
    this.formSignUp = this._formBuilder.group({   
      name: ['', Validators.required],
      pct: ['', Validators.required],
      emailSignUp: ['', [Validators.required, Validators.email]],
      passwordSignUp: ['', Validators.required]
    });
  }
  

  login(){
    if(!this.formLogin.valid){
      console.log('ERRO');
      return false;
    }

    const subs = this._auth.login(this.loginData)
      .subscribe(res => {
        if(res.token){
          this._auth.token = res.token;
          this._router.navigate(['/']);
        }
      });
    this.subscription = subs;
  }

  signUp(){
    if(!this.formSignUp.valid){
      console.log('ERRO');
      return false;
    }

    const subs = this._auth.signup(this.signUpData)
      .subscribe(res => {
        console.log(res);
      })
    this.subscription = subs;
  }
}

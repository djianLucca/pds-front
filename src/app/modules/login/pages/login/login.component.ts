import { FacadeService } from './../../../../shared/services/facade.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { ISubscription, Subscription } from 'rxjs/Subscription';

import { ILogin } from './../../../../interfaces/login';
import { AuthService } from './../../../../shared/auth/auth.service';
import { IPct } from '../../../../interfaces/pct';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  formSignUp: FormGroup;

  isLoginFormOn = true;

  loginData: ILogin = {};
  signUpData: IPct = { user: { person: {} } };


  constructor(
    private _auth: AuthService,
    private facade: FacadeService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.initForms();
    this.clearToken();
  }

  openSnackBar(message) {
    this._snackBar.open(message, '', {duration: 3000});
  }

  clearToken(){
    this._auth.tokenRemove()
  }

  initForms() {
    this.initLoginForm();
    this.initSignUpForm();
  }

  initLoginForm() {
    this.formLogin = this._formBuilder.group({
      emailLogin: ['', [Validators.required, Validators.email]],
      passwordLogin: ['', Validators.required]
    });
  }

  initSignUpForm() {
    this.formSignUp = this._formBuilder.group({
      name: ['', Validators.required],
      pct: ['', Validators.required],
      emailSignUp: ['', [Validators.required, Validators.email]],
      passwordSignUp: ['', Validators.required]
    });
  }


  login() {
    this._auth.login({email: "djian@user.com",password: "password"})
      .subscribe(res => {
        this._auth.token = res.token;
        this._router.navigate(['/']);
      });


  }

  signUp() {
    this.facade.postPct(this.signUpData)
      .subscribe(res => {
        this.openSnackBar('Conta criada com sucesso');
        this.isLoginFormOn = true;
      });

  }

  changeForm(){
    this.isLoginFormOn = !this.isLoginFormOn;
  }
}

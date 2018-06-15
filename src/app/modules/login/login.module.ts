import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatSnackBarModule, MatProgressBarModule } from '@angular/material';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from '../../shared/auth/auth.service';

 @NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AgmCoreModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

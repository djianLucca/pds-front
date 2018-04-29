import { LoginService } from './login.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AgmCoreModule,
    FormsModule
  ],
  providers: [LoginService],
  declarations: [LoginComponent]
})
export class LoginModule { }

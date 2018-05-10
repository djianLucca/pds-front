import { NavbarModule } from './shared/components/navbar/navbar.module';
import { AuthGuard } from './shared/auth/auth.guard';
import { AuthService } from './shared/auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthModule, HttpsRequestInterceptor } from './shared/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GOOGLE_MAPS_API_KEY } from './shared/globals/constants';
import { BaseService } from './shared/services/base.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAPS_API_KEY
    }),
    AuthModule,
    HttpClientModule,
    NavbarModule
  ],
  providers: [
    BaseService,
    HttpClient,
    HttpsRequestInterceptor,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

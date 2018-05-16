import { AuthService } from './shared/auth/auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GOOGLE_MAPS_API_KEY } from './shared/globals/constants';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from './shared/auth/auth.guard';
import { AuthModule, HttpsRequestInterceptor } from './shared/auth/auth.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { ServicesModule } from './shared/services/services.module';
import { FormBuilder } from '@angular/forms';


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
    NavbarModule,
    ServicesModule
  ],
  providers: [
    AuthService,
    HttpClient,
    HttpsRequestInterceptor,
    AuthGuard,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

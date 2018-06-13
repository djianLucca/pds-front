import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { StartupDashboardComponent } from './components/startup-dashboard/startup-dashboard.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, SidenavComponent, StartupDashboardComponent]
})
export class HomeModule { }

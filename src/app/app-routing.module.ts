import { AuthGuard } from './shared/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/modules/home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },{
    path: 'activities',
    loadChildren: 'app/modules/activity/activity.module#ActivityModule',
    canActivate: [AuthGuard]
  },{
    path: 'login',
    loadChildren: 'app/modules/login/login.module#LoginModule'
  },{
    path: 'models',
    loadChildren: 'app/modules/model/model.module#ModelModule',
    canActivate: [AuthGuard]
  },{
    path: 'pcts',
    loadChildren: 'app/modules/pct/pct.module#PctModule',
    canActivate: [AuthGuard]
  },{
    path: 'startups',
    loadChildren: 'app/modules/startup/startup.module#StartupModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

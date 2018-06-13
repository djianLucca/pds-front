import { AuthGuard } from './shared/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/modules/home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },{
    path: 'login',
    loadChildren: 'app/modules/login/login.module#LoginModule'
  },{
    path: 'startup',
    loadChildren: 'app/modules/startup/startup.module#StartupModule',
    canActivate: [AuthGuard]
  },{
    path: 'model',
    loadChildren: 'app/modules/model/model.module#ModelModule',
    canActivate: [AuthGuard]
  },{
    path: 'activity',
    loadChildren: 'app/modules/activity/activity.module#ActivityModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

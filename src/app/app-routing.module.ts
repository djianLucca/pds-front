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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

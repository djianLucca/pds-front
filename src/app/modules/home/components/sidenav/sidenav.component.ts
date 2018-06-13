import { Router } from '@angular/router';
import { AuthService } from './../../../../shared/auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { IPct } from '../../../../interfaces/pct';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  @Input() pct: IPct;

  is_admin = false;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.setIsAdmin();
  }

  setIsAdmin(){
    this.is_admin = this._authService.is_admin;
  }

  logout(){
    this._authService.tokenRemove();
    this._router.navigateByUrl('/login');
  }

}

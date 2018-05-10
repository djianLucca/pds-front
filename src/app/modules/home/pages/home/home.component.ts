import { IPct } from './../../../../interfaces/pct';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activePct: IPct = {};

  constructor(private _auth: AuthService) { }

  ngOnInit() {
   
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { IPct } from '../../../../interfaces/pct';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  @Input() pct: IPct;

  constructor() { }

  ngOnInit() {
  }

}

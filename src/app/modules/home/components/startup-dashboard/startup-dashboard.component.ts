import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-startup-dashboard',
  templateUrl: './startup-dashboard.component.html',
  styleUrls: ['./startup-dashboard.component.css']
})
export class StartupDashboardComponent implements OnInit {

  @Input() startupId;

  constructor() { }

  ngOnInit() {
  }

}

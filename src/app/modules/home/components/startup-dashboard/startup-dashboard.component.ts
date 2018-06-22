import { FacadeService } from './../../../../shared/services/facade.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-startup-dashboard',
  templateUrl: './startup-dashboard.component.html',
  styleUrls: ['./startup-dashboard.component.css']
})
export class StartupDashboardComponent implements OnInit {

  @Input() startupId;

  dataModel = [];
  dataStartup = [];

  constructor(private facade: FacadeService) { }

  ngOnInit() {
    this.setDataModel(this.startupId);
    this.setDataStartup(this.startupId);
  }

  setDataStartup(startupId, isDone = true,){
    this.facade.getChart(startupId, isDone)
      .subscribe(res => this.dataStartup = res);
  }

  setDataModel(startupId, isDone = false,){
    this.facade.getChart(startupId, isDone)
      .subscribe(res => this.dataModel = res);
  }
}

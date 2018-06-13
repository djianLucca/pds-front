import { FacadeService } from './../../../../shared/services/facade.service';
import { Component, OnInit } from '@angular/core';
import { IPhase } from '../../../../interfaces/phase';
import { IDimension } from '../../../../interfaces/dimension';
import { IActivityType } from '../../../../interfaces/activity-type';
import { IActivity } from '../../../../interfaces/activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  phases: IPhase[] = [];
  dimensions: IDimension[] = [];
  activitiesTypes: IActivityType[] = [];
  activities: IActivity[] = [];

  activityToAdd: IActivity = {};

  constructor(private facade: FacadeService) { }

  ngOnInit() {
    this.setAllLists();
  }



  setAllLists(){
    this.setPhases();
    this.setDimensions();
    this.setAcitivitiesTypes();
    this.setActivities();
  }

  setPhases(){
    this.facade.getPhases()
      .subscribe(res => this.phases = res);
  }

  setDimensions(){
    this.facade.getDimensions()
      .subscribe(res => this.dimensions = res);
  }

  setAcitivitiesTypes(){
    this.facade.getActivitiesTypes()
      .subscribe(res => this.activitiesTypes = res);
  }

  setActivities(){
    this.facade.getActivities()
      .subscribe(res => this.activities = res);
  }

  addActivity(){
    this.facade.postActivity(this.activityToAdd)
    .subscribe(res => {
      this.activityToAdd = {};
      this.setActivities();
    });
  }
}

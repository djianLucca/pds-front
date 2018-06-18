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

  currentPhase = '';


  constructor(private facade: FacadeService) { }

  ngOnInit() {
    this.setAllLists();
  }

  setAllLists(){
    this.setPhases();
    this.setDimensions();
    this.setAcitivitiesTypes();
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

  setCurrentPhase(phaseId){
    this.currentPhase = phaseId;
    this.setActivities(phaseId);
  }

  setActivities(phaseId){
    this.activities = [];
    this.facade.getActivitiesByPhase(phaseId)
      .subscribe(res => this.activities = res);
  }

  addActivity(activity: IActivity){
    this.facade.postActivity(activity)
    .subscribe(res => this.setActivities(activity.phaseId));
  }

  removeActivity(activityId){
    this.facade.deleteActivity(activityId)
      .subscribe(res => this.setActivities(this.currentPhase));
  }
}

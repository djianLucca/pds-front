import { IActivity } from './../../../interfaces/activity';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPhase } from '../../../interfaces/phase';
import { IDimension } from '../../../interfaces/dimension';
import { IActivityType } from '../../../interfaces/activity-type';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {


  @Input() phases: IPhase[] = [];
  @Input() dimensions: IDimension[] = [];
  @Input() activitiesTypes: IActivityType[] = [];
  @Input() activities: IActivity[] = [];
  @Input() isViewMode = true;
  @Input() isLoading = false;

  @Output() phaseChange = new EventEmitter<any>(); 
  @Output() addActivity = new EventEmitter<any>(); 
  @Output() removeActivity = new EventEmitter<any>(); 


  activityToAdd: IActivity = {};
  currentPhase = '';

  constructor() { }

  ngOnInit() {
  }

  emitPhaseChange(phaseId){
    this.currentPhase = phaseId;
    this.phaseChange.emit({ phaseId });
  }

  emitAddActivity(){
    this.activityToAdd.phaseId = this.currentPhase;
    this.addActivity.emit({ activity: this.activityToAdd });
    this.activityToAdd = {};
  }

  emitRemoveActivity(activityId){
    this.removeActivity.emit({ activityId });
  }

}

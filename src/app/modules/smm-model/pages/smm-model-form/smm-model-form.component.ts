import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { IPhase } from '../../../../interfaces/phase';
import { IDimension } from '../../../../interfaces/dimension';
import { IActivityType } from '../../../../interfaces/activity-type';
import { IActivity } from '../../../../interfaces/activity';
import { ISmmModel } from '../../../../interfaces/smm-model';
import { FormBuilder, Validators } from '@angular/forms';
import { FacadeService } from '../../../../shared/services/facade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smm-model-form',
  templateUrl: './smm-model-form.component.html',
  styleUrls: ['./smm-model-form.component.css']
})
export class SmmModelFormComponent implements OnInit {

  smmModelForm: FormGroup;

  phases: IPhase[] = [];
  dimensions: IDimension[] = [];
  activitiesTypes: IActivityType[] = [];
  activitiesFromAPi: IActivity[] = [];
  activities: IActivity[] = [];

  currentPhase = '';

  smmModel: ISmmModel = {};
  smmModelBase: ISmmModel = {};

  smmModels: ISmmModel[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private facade: FacadeService
  ) { }

  ngOnInit() {
    this.setAllLists();
    this.initForm();
  }

  setAllLists(){
    this.setPhases();
    this.setDimensions();
    this.setAcitivitiesTypes();
    this.setModels();
  }

  initForm(){
    this.smmModelForm = this._formBuilder.group({
      smmModelName: ['', Validators.required],
      smmModelBase: []
    });
  }

  setModels(){
    this.facade.getSmmModels()
      .subscribe(res => this.smmModels = res);
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
    this.activities = this.activitiesFromAPi
      .filter(activity => activity.phaseId == phaseId)
  }

  setActivitiesFromApi(smmModelId){
    if(smmModelId == '0') return false;

    this.facade.getSmmModelActivities(smmModelId)
      .subscribe(res => {
        this.activitiesFromAPi = res;
        this.setActivities(this.currentPhase);
      });
  }

  addActivity(activity: IActivity){
    this.facade.postActivity(activity)
    .subscribe(res => {
      this.activitiesFromAPi.push(res);
      this.setActivities(activity.phaseId)
    });
  }

  removeActivity(activityId){
    let index = this.activitiesFromAPi.findIndex(activity => activity.id == activityId);
    console.log(index)
    this.activitiesFromAPi.splice(index, 1);
    this.setActivities(this.currentPhase);
  }

  save(){
    this.smmModel.activitiesIds = this.activitiesFromAPi.map(activity => activity.id);
    this.facade.postSmmModel(this.smmModel)
      .subscribe(res => this._router.navigateByUrl('/models'));
  }

}

import { ISmmModel } from './../../../../interfaces/smm-model';
import { IActivity } from './../../../../interfaces/activity';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FacadeService } from '../../../../shared/services/facade.service';
import { IPhase } from '../../../../interfaces/phase';
import { IStartupModel } from '../../../../interfaces/startup-model';
import { IStartup } from '../../../../interfaces/startup';
import { IActionPlan } from '../../../../interfaces/action-plan';

@Component({
  selector: 'app-startup-model',
  templateUrl: './startup-model.component.html',
  styleUrls: ['./startup-model.component.css']
})
export class StartupModelComponent implements OnInit {

  phases: IPhase[] = [];
  actionPlansFromApi: IActionPlan[] = [];
  actionPlans: IActionPlan[] = [];
  startupModels: IStartupModel[] = [];
  smmModels: ISmmModel[] = [];

  isHover = false;

  startup: IStartup = {};

  currentPhase = '';


  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private facade: FacadeService
  ) { }

  ngOnInit() {
    this.setAllLists();
    this.setStartup();
  }

  setAllLists(){
    this.setPhases();
    this.setModels();
  }

  setStartup(){
    this._activatedRouter.queryParams
      .subscribe((params: any) => {
        if (params['id']) {
          let id = params['id'];
          this.facade.getStartupsById(id)
            .subscribe(res => {
              this.startup = res
              if(!this.startup.hasModel){
                this.setActionPlansFromApi(id);
              }
            });
        }else{
          this._router.navigateByUrl('/startups');
        }
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

  setCurrentPhase(phaseId){
    this.currentPhase = phaseId;
    this.setActionPlans(phaseId);
  }

  setActionPlans(phaseId){
    this.actionPlans = [];
    this.actionPlans = this.actionPlansFromApi
      .filter(ap => ap.activity.phaseId == phaseId)
  }

  setActionPlansFromApi(startupId){
    this.facade.getStartupModel(startupId)
      .subscribe(res => this.actionPlansFromApi = res);
  }

  setActivitiesFromApi(smmModelId){
    this.facade.getSmmModelActivities(smmModelId)
      .subscribe((res: IActivity[]) => {
        this.actionPlansFromApi = res.map(activity => {
          let actionPlan: IActionPlan = { activity: {}};
          actionPlan.activity = activity;
          return actionPlan;
        })
        this.setActionPlans(this.currentPhase);
      });
  }

  getUp(i){}

  getDown(i){}

  save(){
    this.facade.postStartupModel(this.startupModels)
      .subscribe(console.log);
  }
}

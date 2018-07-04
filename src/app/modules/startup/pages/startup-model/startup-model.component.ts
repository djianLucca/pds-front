import { IStartupModel } from './../../../../interfaces/startup-model';
import { IActionPlan } from './../../../../interfaces/action-plan';
import { ISmmModel } from './../../../../interfaces/smm-model';
import { IActivity } from './../../../../interfaces/activity';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FacadeService } from '../../../../shared/services/facade.service';
import { IPhase } from '../../../../interfaces/phase';
import { IStartup } from '../../../../interfaces/startup';

@Component({
  selector: 'app-startup-model',
  templateUrl: './startup-model.component.html',
  styleUrls: ['./startup-model.component.css']
})
export class StartupModelComponent implements OnInit {

  phases: IPhase[] = [];
  actionPlansFromApi: IActionPlan[] = [];
  actionPlans: IActionPlan[] = [];
  startupModelsFromApi: any[] = [];
  startupModels: IStartupModel[] = [];
  smmModels: ISmmModel[] = [];

  isHover = false;
  isLoading = false;
 
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
              this.startup = res;
              if(this.startup.hasModel){
                this.setStartupModelsByStartup(id);
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
    this.setStartupModels(phaseId);
  }

  setStartupModels(phaseId){
    this.startupModels = [];
    this.startupModels = this.startupModelsFromApi
      .filter(sm => sm.action_plan.activity.phaseId == phaseId);
  }

  setStartupModelsByStartup(startupId){
    this.facade.getStartupModel(startupId)
      .subscribe(res => {
        this.startupModelsFromApi = res;
        this.setStartupModels(this.currentPhase);
      });
 }

  setStartupModelsFromApi(smmModelId){
    this.isLoading = true;
    this.facade.getSmmModelActionPlans(smmModelId)
      .subscribe((res: IActionPlan[]) => {
        this.startupModelsFromApi = res.map( ap => {
          let startupModel: IStartupModel = {
            is_done: false,
            foreseen_date: null,
            accomplished_date: null,
            realization_place: '',
            pct_cost: 0,
            startup_cost: 0,
            startup: {},
            startupId: this.startup.id,
            actionPlanId: ap.id,
            action_plan: ap
          };

          return startupModel;
        });
        this.setStartupModels(this.currentPhase);
        this.isLoading = false;
      });
  }

  getUp(i){}

  getDown(i){}

  save(){
    let ligthActionModel = this.lightfyStartupModel(this.startupModelsFromApi)
    this.facade.postStartupModel(ligthActionModel, this.startup.id)
      .subscribe(() => this._router.navigateByUrl('/startup'));
  }

  lightfyStartupModel(startupModels: IStartupModel[]){
    return startupModels.map( ap => {
      let startupModel: IStartupModel = ap;
      startupModel.actionPlanId = ap.action_plan.id;
      startupModel.action_plan = {};
      return startupModel;
    })
  }
}

import { FacadeService } from './../../../../shared/services/facade.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ISmmModel } from '../../../../interfaces/smm-model';
import { AuthService } from '../../../../shared/auth/auth.service';
import { IPhase } from '../../../../interfaces/phase';
import { IActivity } from '../../../../interfaces/activity';

@Component({
  selector: 'app-smm-model-list',
  templateUrl: './smm-model-list.component.html',
  styleUrls: ['./smm-model-list.component.css']
})
export class SmmModelListComponent implements OnInit {

  smmModels: MatTableDataSource<ISmmModel[]>
  displayedColumns = ['name', 'creator', 'actions'];

  isPerson = true;
  pctId: string;

  isLoading = false;
  isEmpty = true;

  constructor(
    private facade: FacadeService,
    private _auth: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.setPctId();
    this.getUserModels();
  }

  setPctId(){
    this.pctId = this._auth.tokenDecoded.id;
  }

  getUserModels(){
    this.isLoading = true;
    this.isEmpty = true;
    this.facade.getSmmModelsByPct(this.pctId)
      .subscribe(res => {
        this.isLoading = false;
        if(res[0]) this.isEmpty = false;
        this.smmModels =  new MatTableDataSource(res)
      });
  }

  getAllModels(){
    this.isLoading = true;
    this.isEmpty = true;
    this.facade.getSmmModels()
      .subscribe(res => {
        this.isLoading = false;
        if(res[0]) this.isEmpty = false;
        this.smmModels =  new MatTableDataSource(res)
      });
  }

  toggleChange(isMineList){
    if(isMineList) this.getUserModels();
    else this.getAllModels();
  }

  isOwner(pctId){
    return pctId == this.pctId;
  }

  deleteSmmModel(smmModelId){
    this.facade.deleteSmmModel(smmModelId)
      .subscribe(res => this.getUserModels())
  }

  openDialog(smmModelId): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '900px',
      data: { smmModelId }
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <button (click)="close()" mat-fab style="right: 5px;background-color: var(--second-color);posi;position: absolute;top: 5px; z-index:2">
    <mat-icon>clear</mat-icon>
  </button>
  <app-activity-list
    [phases]="phases"
    [activities]="activities"
    [isViewMode]="true"
    (phaseChange)="setCurrentPhase($event.phaseId)"
  ></app-activity-list>
  `,
})
export class DialogOverviewExampleDialog {

  phases: IPhase[] = [];
  activitiesFromAPi: IActivity[] = [];
  activities: IActivity[] = [];

  currentPhase = '';

  constructor(
    private facade: FacadeService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(){ 
    this.setPhases();
    this.setActivitiesFromApi(this.data.smmModelId);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close(){
    this.dialogRef.close();
  }

  setPhases(){
    this.facade.getPhases()
      .subscribe(res => this.phases = res);
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
    console.log(smmModelId);
    this.facade.getSmmModelActivities(smmModelId)
      .subscribe(res => {
        this.activitiesFromAPi = res;
        this.setActivities(this.currentPhase);
      });
  }

}

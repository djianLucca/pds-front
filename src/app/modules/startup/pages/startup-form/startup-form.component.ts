import { IArea } from './../../../../interfaces/area';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../../../shared/services/facade.service';
import { IStartup } from '../../../../interfaces/startup';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-startup-form',
  templateUrl: './startup-form.component.html',
  styleUrls: ['./startup-form.component.css']
})
export class StartupFormComponent implements OnInit {

  startupForm: FormGroup;

  areas: IArea[] = [];
  startup: IStartup = {person: {}}

  hasPressedSave = false;
  isUpdating = false;

  constructor(
    private _formBuilder: FormBuilder,
    private facade: FacadeService,
    private _router: Router,
    private _activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAreas();
    this.initForm();
    this.checkOperation();
  }

  getAreas(){
    this.facade.getAreas()
      .subscribe(res => this.areas = res);
  }

  initForm(){
    this.startupForm = this._formBuilder.group({
      startupName: ['', Validators.required],
      startupPerson: ['', Validators.required],
      areaId: ['', Validators.required]
    });
  }
  
  checkOperation(){
    this._activatedRouter.queryParams.subscribe((params: any) => {
      if (!params['id']) return false;

      const id = params['id'];
      this.isUpdating = true;

      this.facade.getStartupsById(id)
        .subscribe(res => this.startup = res);
    });
  }

  save(){
    if (!this.startupForm.valid) return false;
    this.hasPressedSave = true;
    
    if(this.isUpdating){
      this.update();
    }else{
      this.create();
    }
  }

  create(){
    this.facade.postStartup(this.startup)
      .subscribe(() => {
        this._router.navigateByUrl('/startups');
      });
  }

  update(){
    this.facade.putStartup(this.startup)
      .subscribe(() => {
        this._router.navigateByUrl('/startups');
      });
  }
}

import { IArea } from './../../../../interfaces/area';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../../../shared/services/facade.service';
import { IStartup } from '../../../../interfaces/startup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startup-form',
  templateUrl: './startup-form.component.html',
  styleUrls: ['./startup-form.component.css']
})
export class StartupFormComponent implements OnInit {

  startupForm: FormGroup;

  areas: IArea[] = [];
  startup: IStartup = {person: {}}

  constructor(
    private _formBuilder: FormBuilder,
    private facade: FacadeService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getAreas();
    this.initForm();
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

  save(){
    this.facade.postStartup(this.startup)
      .subscribe(() => {
        this._router.navigateByUrl('/startup');
      });
  }

}

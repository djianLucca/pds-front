import { IPct } from './../../../../interfaces/pct';
import { FacadeService } from './../../../../shared/services/facade.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pct-form',
  templateUrl: './pct-form.component.html',
  styleUrls: ['./pct-form.component.css']
})
export class PctFormComponent implements OnInit {

  pctForm: FormGroup;

  pct: IPct = { user: { person: {}}};

  constructor(
    private _formBuilder: FormBuilder,
    private facade: FacadeService,
    private _router: Router,
    private _activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();
    this.checkOperation();
  }

  initForm(){
    this.pctForm = this._formBuilder.group({
      name: ['', Validators.required],
      pct: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  
  checkOperation(){
    this._activatedRouter.queryParams.subscribe((params: any) => {
      if (!params['id']) this._router.navigateByUrl('/');;

      const id = params['id'];

      this.facade.getPctsById(id)
        .subscribe(res => this.pct = res);
    });
  }

  update(){
    this.facade.putPct(this.pct)
      .subscribe(() => {
        this._router.navigateByUrl('/');
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FacadeService } from '../../../../shared/services/facade.service';
import { ISmmModel } from '../../../../interfaces/smm-model';

@Component({
  selector: 'app-smm-model-list',
  templateUrl: './smm-model-list.component.html',
  styleUrls: ['./smm-model-list.component.css']
})
export class SmmModelListComponent implements OnInit {

  smmModels: MatTableDataSource<ISmmModel[]>
  displayedColumns = ['rank', 'name', 'creator', 'usages', 'actions'];

  isPerson = true;

  constructor(private facade: FacadeService) { }

  ngOnInit() {
    this.getUserModels();
  }

  getUserModels(){
    this.facade.getSmmModelsByPct()
      .subscribe(res => this.smmModels =  new MatTableDataSource(res))
  }

  getAllModels(){
    this.facade.getSmmModels()
      .subscribe(res => this.smmModels =  new MatTableDataSource(res))
  }

  toggleChange(){
    this.isPerson = !this.isPerson;
  }
}

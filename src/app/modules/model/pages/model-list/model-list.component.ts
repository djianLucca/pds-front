import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FacadeService } from '../../../../shared/services/facade.service';
import { IModel } from '../../../../interfaces/model';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {

  models: MatTableDataSource<IModel[]>;
  displayedColumns = ['name', 'actions'];

  constructor(private facade: FacadeService) { }

  ngOnInit() {
    this.getModels();
  }

  getModels(){
    this.facade.getModels();
  }
}

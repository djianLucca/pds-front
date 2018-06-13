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

  models: any[];
  displayedColumns = ['rank', 'name', 'creator', 'usages', 'actions'];

  constructor(private facade: FacadeService) { }

  ngOnInit() {
    this.getModels();
  }

  getModels(){
    this.models = [
      {rank: 1, name: 'SMM Padrão', pct: 'Ulbra Canoas', usages: 27, },
      {rank: 2, name: 'Avião em 1 ano', pct: 'PUC', usages: 24, },
      {rank: 3, name: 'Startups de uma pessoa', pct: 'Ulbra Torres', usages: 22, },
      {rank: 4, name: 'Startup internacional', pct: 'Incubs', usages: 19, },
      {rank: 5, name: 'Modelo focado em Bicicletas', pct: 'Fevale', usages: 10, },
      {rank: 6, name: 'Modelo focado em Mercado', pct: 'MIT', usages: 7, }
    ]
  }
}

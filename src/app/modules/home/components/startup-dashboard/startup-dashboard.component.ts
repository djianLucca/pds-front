import { FacadeService } from './../../../../shared/services/facade.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-startup-dashboard',
  templateUrl: './startup-dashboard.component.html',
  styleUrls: ['./startup-dashboard.component.css']
})
export class StartupDashboardComponent implements OnInit {

  @Input() startupId;

  dataModel = [];
  dataStartup = [];

  constructor(private facade: FacadeService) { }

  ngOnInit() {
    this.setDataModel(this.startupId);
    this.setDataStartup(this.startupId);
  }

  setDataStartup(startupId, isDone = true,){
    this.facade.getChart(startupId, isDone)
      .subscribe(res => this.dataStartup = this.modelDataToChart(res));
  }

  setDataModel(startupId, isDone = false,){
    this.facade.getChart(startupId, isDone)
      .subscribe(res => this.dataModel = this.modelDataToChart(res));
  }
  
  modelDataToChart(dataToModel){
  
    let dataModel = [
      {data: [0, 0, 0, 0, 0], label: 'Mercado'},
      {data: [0, 0, 0, 0, 0], label: 'Pessoal'},
      {data: [0, 0, 0, 0, 0], label: 'Finanças'},
      {data: [0, 0, 0, 0, 0], label: 'Inovação'},
      {data: [0, 0, 0, 0, 0], label: 'Gestão'},
      {data: [0, 0, 0, 0, 0], label: 'Comlementares'}
    ];

    dataToModel.forEach(data => {
      let phaseIndex = this.getPhaseIndex(data);
      let dimensionIndex = this.getDimensionIndex(data);

      if(phaseIndex == -1 || dimensionIndex == -1) return [];

      dataModel[dimensionIndex].data[phaseIndex] += data.total;
    });

    return dataModel;
  }

  getPhaseIndex(data){
    switch(data.phase.name){
      case 'Skate':
        return 0;
      case 'Bicicleta':
        return 1;
      case 'Carro':
        return 2;
      case 'Avião':
        return 3;
      case 'Foguete':
        return 4;
      default:
        return -1;
    }
  }

  getDimensionIndex(data){
    switch(data.dimension.name){
      case 'Mercado':
        return 0;
      case 'Pessoal':
        return 1;
      case 'Finanças':
        return 2;
      case 'Inovação':
        return 3;
      case 'Gestão':
        return 4;
      case 'Comlementares':
        return 5;
      default:
        return -1;
    }
  }
  
}

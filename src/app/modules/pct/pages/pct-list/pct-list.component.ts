import { IPct } from './../../../../interfaces/pct';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FacadeService } from '../../../../shared/services/facade.service';

@Component({
  selector: 'app-pct-list',
  templateUrl: './pct-list.component.html',
  styleUrls: ['./pct-list.component.css']
})
export class PctListComponent implements OnInit {

  pcts: MatTableDataSource<IPct[]>;
  displayedColumns = ['name', 'user', 'actions'];

  constructor(private facade: FacadeService) { }

  ngOnInit() {
    this.getPcts();
  }

  getPcts(){
    this.facade.getPcts()
      .subscribe( response => this.pcts = new MatTableDataSource(response));
  }

  deletePct(id){
    this.facade.deletePct(id)
      .subscribe(() => this.getPcts());
  }

}

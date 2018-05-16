import { StartupService } from './../../../../shared/services/startup.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IStartup } from '../../../../interfaces/startup';
import { FacadeService } from '../../../../shared/services/facade.service';

@Component({
  selector: 'app-startup-list',
  templateUrl: './startup-list.component.html',
  styleUrls: ['./startup-list.component.css']
})
export class StartupListComponent implements OnInit {

  startups: MatTableDataSource<IStartup[]>;
  displayedColumns = ['name', 'area', 'person', 'actions'];

  constructor(private facade: FacadeService) { }

  ngOnInit() {
    this.getStartups();
  }

  getStartups(){
    this.facade.getStartups()
      .subscribe( response => this.startups = new MatTableDataSource(response));
  }

  deleteStartup(id){
    this.facade.deleteStartup(id)
      .subscribe(() => this.getStartups());
  }

}

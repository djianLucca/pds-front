import { Router } from '@angular/router';
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

  constructor(
    private facade: FacadeService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getStartups();
  }

  getStartups(){
    this.facade.getStartups()
      .subscribe( response => this.startups = new MatTableDataSource(response));
  }

  editStartup(id){
    this._router.navigate(['/startups/form/'], {queryParams: { id }});
  }

  deleteStartup(id){
    this.facade.deleteStartup(id)
      .subscribe(() => this.getStartups());
  }

  editModel(id){
    this._router.navigate(['/startups/model/'], {queryParams: { id }});
  }

}

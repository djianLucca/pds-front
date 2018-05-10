import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IStartup } from '../../../../interfaces/startup';

@Component({
  selector: 'app-startup-list',
  templateUrl: './startup-list.component.html',
  styleUrls: ['./startup-list.component.css']
})
export class StartupListComponent implements OnInit {
  startups: IStartup[] = [
    {
      id: '1',
      name: 'Startup 1',
      area: {
        name: 'Area 1'
      },
      person: {
        name: 'Person 1'
      }
    },{
      id: '2',
      name: 'Startup 2',
      area: {
        name: 'Area 2'
      },
      person: {
        name: 'Person 2'
      }
    }
  ];

  displayedColumns = ['name', 'area', 'person', 'actions'];
  dataSource = new MatTableDataSource(this.startups);

  constructor() { }

  ngOnInit() {
  }

}

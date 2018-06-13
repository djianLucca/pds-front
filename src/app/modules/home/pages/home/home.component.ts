import { IPct } from './../../../../interfaces/pct';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/auth/auth.service';
import { IStartup } from '../../../../interfaces/startup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activePct: IPct = {};
  startups: IStartup[] = [];

  constructor(private _auth: AuthService) { }

  ngOnInit() {
   this.setActivePct();
   this.setStartups();
  }

  setStartups(){
    this.startups = [
      {id: '1', name: 'Startup 1'},
      {id: '2', name: 'Startup 2'},
      {id: '3', name: 'Startup 3'},
      {id: '4', name: 'Startup 4'},
      {id: '5', name: 'Startup 5'},
      {id: '6', name: 'Startup 6'},
    ]
  }

  isFirst(element, array){
    return array[0] == element;
  }

  isLast(element, array: any[]){
    let lastIndex = array.length - 1;
    return element == array[lastIndex]
  }

  setActivePct(){
    this.activePct = this._auth.tokenDecoded
  }
}

import { FacadeService } from './../../../../shared/services/facade.service';
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

  constructor(
    private _auth: AuthService,
    private facade: FacadeService
  ) { }

  ngOnInit() {
   this.setActivePct();
   this.setStartups();
  }

  setStartups(){
    this.facade.getStartups()
      .subscribe(res => this.startups = res);
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

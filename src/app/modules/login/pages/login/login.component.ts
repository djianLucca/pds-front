import { Component, OnInit } from '@angular/core';
import { MAP_STYLE } from '../../../../shared/globals/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lat = 20;
  lng = -80;
  zoom = 6;

  style = MAP_STYLE;

  constructor() { }

  ngOnInit() {
    this.testAnimation();
  }

  testAnimation(){ 
    setInterval(() => {
      // this.zoom = Math.floor(Math.random() * 11) + 3;
      // this.lat++;
      this.lng++;
    }, 500);
  }
}

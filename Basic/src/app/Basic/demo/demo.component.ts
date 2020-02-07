import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  name:string="asd";
  class:string="adsas";
  Age:number=12;
  constructor() { }

  ngOnInit() {
  }

}

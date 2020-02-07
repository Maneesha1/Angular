import { Component, OnInit } from '@angular/core';
import {Employ} from 'src/app/model/employ';
@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  item:Employ;
  constructor() {
    this.item=new Employ();
  }

  ngOnInit() {
  }
  public Add()
  {
   
    console.log(this.item);
  }
}

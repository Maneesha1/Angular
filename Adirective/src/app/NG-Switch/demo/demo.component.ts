import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  items:any[]=[
    {name:'one',val:1},
    {name:'two',val:2},
    {name:'three',val:3}
  ];
  selectedValue:string='one';
  constructor() { }

  ngOnInit() {
  }

}

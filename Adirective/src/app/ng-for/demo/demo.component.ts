import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  no:number[]=[12,13,14,67,54,68]
  name:string[]=["manu","mani","manee","anu"]
  constructor() { 
    this.name.push("ram")
  }

  ngOnInit() {
  }

}

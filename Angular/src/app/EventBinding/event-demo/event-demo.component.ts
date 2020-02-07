import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-demo',
  templateUrl: './event-demo.component.html',
  styleUrls: ['./event-demo.component.css']
})
export class EventDemoComponent implements OnInit {
  name:string;
 
  result:number;
 
  constructor() { }

  ngOnInit() {
  }
  public setname()
  {
    this.name="manu";
  }
  public Greet(val:string)
  {
    this.name=val;
  }
  public Add(no1:number,no2:number)
  {
    
    this.result=Number(no1)+Number(no2);
  }
 
  public sub(no1:number,no2:number)
  {
    this.result=Number(no1)-Number(no2);
    
  }
}

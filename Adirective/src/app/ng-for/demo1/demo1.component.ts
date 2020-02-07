import { Component, OnInit } from '@angular/core';
import {Student} from 'src/app/Models/student';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  list:Student[]=[];
  Id:number;
  Name:string;
  Std:string;
  Age:number;
  item:Student;
  stds:string[]=["1","2","3"];
  val:boolean=true;
  constructor() { 
    this.list=[
      {Id:1,Name:'manu',Std:'TH',Age:1},
      {Id:2,Name:'manu2',Std:'TH1',Age:12},
      {Id:3,Name:'manu3',Std:'TH2',Age:13},
      {Id:4,Name:'manu4',Std:'TH3',Age:15},
      {Id:5,Name:'manu5',Std:'TH4',Age:19},
    ]
  }

  ngOnInit() {
  }
  public Add()
  {
    this.item=new Student();
    this.item.Id=this.Id;
    this.item.Name=this.Name;
    this.item.Std=this.Std;
    this.item.Age=this.Age;
    this.list.push(this.item);//add item to arry
console.log(this.list);
  }
  public setval()
  {
    this.val=!this.val;
  }

}

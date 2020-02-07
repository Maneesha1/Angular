import { Component, OnInit } from '@angular/core';
import{Project} from 'src/app/Models/project';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  list:Project[]=[];
  Pid:number;
  Pname:string;
  Domain:string;
  Start:Date;
  End:Date;
  item:Project;
  constructor() { 
    //this.list=new Project();
  }

  ngOnInit() {
  }
  public Add()
  {
    this.item=new Project();
    this.item.Pid=this.Pid;
    this.item.Pname=this.Pname;
    this.item.Domain=this.Domain;
    this.item.Start=this.Start;
    this.item.End=this.End;
    this.list.push(this.item);
console.log(this.list);
  }

}

import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  item:Student;
  constructor() { 
  this.item=new Student();
  this.item.Sid=1;
  this.item.Sname="ram";
  this.item.Stu="cse";
  this.item.Age=12;
  this.item.DOB=new Date(2008,12,2);
  }
  ngOnInit() {
  }

}

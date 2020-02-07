import { Component, OnInit } from '@angular/core';
import {Student} from 'src/app/Models/student';
import { getMaxListeners } from 'cluster';
import {Customer} from 'src/app/Models/customer';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  obj:Customer;
  //obj:Student;
  constructor() { 
   
    //this.obj={Sid:1,Sname:"anu",DOB:new Date(2020,12,3,Age:12,Stu:"asd")}
  }

  ngOnInit() {
  }

}

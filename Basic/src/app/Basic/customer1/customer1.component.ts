import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-customer1',
  templateUrl: './customer1.component.html',
  styleUrls: ['./customer1.component.css']
})
export class Customer1Component implements OnInit {
  obj:Customer;
  constructor() { 
  this.obj={Name:"manu",City:"ong",Address:"gunt",Details:"sdf",Email:"m@gmail.com",Mobile:1234}}
  ngOnInit() {
  }

}

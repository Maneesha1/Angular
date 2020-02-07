import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
obj:Customer
  constructor() {
this.obj=new Customer();
this.obj.cname="Man*sha";
this.obj.Age=1;
this.obj.email="M@gmail.com";
this.obj.Mobile=12344;


}
  ngOnInit() {
  }

}

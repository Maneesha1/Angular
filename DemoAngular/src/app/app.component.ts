import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoAngular';
  Customer:any[]=[{"name":'manu',"country":'India',"age":12},
  {"name":'manu1',"country":'US',"age":22},
  {"name":'manu2',"country":'UK',"age":32}];
  studentbyCountry:any[]=[
    {"country":"India","student":[{"name":"manu5","age":62},{"name":"manu4","age":52}]},
    {"country":"London","student":[{"name":"manu6","age":42},{"name":"manu6","age":72}]},
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string= null ;
  num:number=10;
 // imagepath:string='C:\Users\Dell\Desktop\tom.jpg';
  imagepath:string='assets/image/download.png';
  name:string="hii";
  isdisabled:boolean=false;
  getname():string
  {
    return this.name;
  }
}

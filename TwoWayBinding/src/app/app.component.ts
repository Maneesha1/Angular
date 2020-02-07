import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TwoWayBinding';
  name:string="manu";
  onclick():void
  {
    console.log(this.name);
  }
}

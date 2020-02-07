import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
  obj:User;
  constructor() { 
    this.obj=new User();
    //0this.obj.Username="admin";
    //this.obj.Password="admin";
  }

  ngOnInit() {
  }
  public Login(Username:string,Password:string)
  {
     if(this.obj.Username =="admin" && this.obj.Password =="admin")
      console.log("Login sucess");
     else
      console.log("login fail");
      
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
title:string="firstpage"
name:string="User"
date:string="04/02/20" 
  constructor() { }

  ngOnInit() {
  }

}

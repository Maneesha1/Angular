import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { DemoComponent } from './ng-if/demo/demo.component';
//import{DemoComponent}from './ng-for/demo/demo.component';
import { Demo1Component } from './ng-for/demo1/demo1.component';
import {FormsModule} from '@angular/forms';
import { Demo2Component } from './ng-for/demo2/demo2.component';
import{DemoComponent}  from './NG-Switch/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
//bootstrap: [AppComponent]
  
  //bootstrap: [DemoComponent]
  bootstrap:[Demo1Component]
  //bootstrap:[DemoComponent]

})
export class AppModule { }

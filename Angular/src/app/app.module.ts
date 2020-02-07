import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCustomerComponent } from './PropertyBinding/view-customer/view-customer.component';
import { EventDemoComponent } from './EventBinding/event-demo/event-demo.component';
import { Demo1Component } from './TwowayBinding/demo1/demo1.component';
//import { ModelsComponent } from './models/models.component';
//import { EmployComponent } from './class/employ/employ.component';
import { Demo2Component } from './TwowayBinding/demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewCustomerComponent,
    EventDemoComponent,
    Demo1Component,
    //ModelsComponent,
    //EmployComponent,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  //bootstrap: [ViewCustomerComponent]
  //bootstrap:[EventDemoComponent]
  //bootstrap:[Demo1Component]
  bootstrap:[Demo2Component]
})
export class AppModule { }

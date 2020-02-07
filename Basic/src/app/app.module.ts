import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './Basic/demo/demo.component';
import { ViewComponent } from './Basic/view/view.component';
import { CustomerComponent } from './Basic/customer/customer.component';
import { ViewCustomerComponent } from './Basic/view-customer/view-customer.component';
import { Customer1Component } from './Basic/customer1/customer1.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ViewComponent,
    CustomerComponent,
    ViewCustomerComponent,
    Customer1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ViewComponent]
})
export class AppModule { }

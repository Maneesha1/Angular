import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './model/user/user.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
//import { DemoComponent } from './Twowaybinding/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TwowaybindingComponent,
    //DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [TwowaybindingComponent]
})
export class AppModule { }

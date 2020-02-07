import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstpageComponent } from './mydemo/firstpage.component';
import { SecondpageComponent } from './mydemo/secondpage.component';
//import { AppComponet } from './app.component';
//import { from } from 'rxjs';
const routes:Routes=[
  {path:"secondpage",component:SecondpageComponent},
  {path:"firstpage",component:FirstpageComponent},
  {path:"",redirectTo:"./firstpage",pathMatch:'full'}
];


//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

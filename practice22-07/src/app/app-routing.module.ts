import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './module1/component1/component1.component';
import { Component2Component } from './module1/component2/component2.component';
import { Component4Component } from './module2/component4/component4.component';

const routes: Routes = [
  {path: "link1", component:Component1Component},
  {path:"link2", component:Component2Component},
  {path :"link3", redirectTo:"module2/link3", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

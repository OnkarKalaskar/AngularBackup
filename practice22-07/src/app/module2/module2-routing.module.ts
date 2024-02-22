import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component4Component } from './component4/component4.component';

const routes: Routes = [
  {path:"module2/link3", component:Component4Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }

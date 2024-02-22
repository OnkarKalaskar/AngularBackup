import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment4Component } from './assignment4/assignment4.component';

const routes: Routes = [
  {path: "fullName" , component: Assignment4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [Assignment4Component]

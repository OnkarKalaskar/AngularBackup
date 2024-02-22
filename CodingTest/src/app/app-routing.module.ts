import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { SearchbodyComponent } from './searchbody/searchbody.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';

const routes: Routes = [
  {path : "addCustomer", component:AddcustomerComponent},
  {path : "searchPage/:id/:data", component:SearchcustomerComponent},
  {path : "searchbody", component:SearchbodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

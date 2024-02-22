import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { SubstractionComponent } from './substraction/substraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import { GetEmployeesComponent } from './get-employees/get-employees.component';
import { GetSalaryComponent } from './get-salary/get-salary.component';
import { BranchComponent } from './branch/branch.component';
const routes: Routes = [

  {path: "addition", component: AdditionComponent},
  {path : "substraction", component: SubstractionComponent},
  {path : "multiplication", component: MultiplicationComponent},
  {path : "division", component : DivisionComponent},
  {path : "Employees", component: GetEmployeesComponent},
  {path : "salary" , component : GetSalaryComponent},
  {path : "branches", component : BranchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

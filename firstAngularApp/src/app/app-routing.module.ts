import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { StudentComponent } from './student/student.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { BodyCompComponent } from './body-comp/body-comp.component';
import { EmployeeComponent } from './employee/employee.component';
import { BindingExComponent } from './binding-ex/binding-ex.component';

const routes: Routes = [
  {path: "", component : AppComponent },
  {path : "team", component: TeamComponent},
  {path : "student", component: StudentComponent},
  {path : "header", component: HeaderCompComponent},
  {path : "body", component: BodyCompComponent},
  {path: "employee", component : EmployeeComponent},
  {path: "binding", component : BindingExComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AppComponent,TeamComponent,StudentComponent,HeaderCompComponent,BodyCompComponent,EmployeeComponent]

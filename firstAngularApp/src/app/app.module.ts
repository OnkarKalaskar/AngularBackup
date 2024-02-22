import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { BodyCompComponent } from './body-comp/body-comp.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { TeamComponent } from './team/team.component';
import { StudentComponent } from './student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BindingExComponent } from './binding-ex/binding-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    BodyCompComponent,
    HeaderCompComponent,
    TeamComponent,
    StudentComponent,
    BindingExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent, EmployeeComponent,BodyCompComponent,HeaderCompComponent,TeamComponent,StudentComponent,BindingExComponent]
})
export class AppModule { }

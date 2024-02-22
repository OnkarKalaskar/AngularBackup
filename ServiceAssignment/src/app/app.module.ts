import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { OperationsService } from './operations.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { SubstractionComponent } from './substraction/substraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import { GetEmployeesComponent } from './get-employees/get-employees.component';
import { GetSalaryComponent } from './get-salary/get-salary.component';
import { BranchComponent } from './branch/branch.component';


@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    SubstractionComponent,
    MultiplicationComponent,
    DivisionComponent,
    GetEmployeesComponent,
    GetSalaryComponent,
    BranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [OperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

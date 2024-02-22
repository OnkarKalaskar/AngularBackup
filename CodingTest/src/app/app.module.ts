import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { SearchbodyComponent } from './searchbody/searchbody.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponent,
    SearchcustomerComponent,
    DisplaydataComponent,
    SearchbodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

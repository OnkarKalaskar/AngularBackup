import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { Component2Component } from './component2/component2.component';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';
import { Component3Component } from './component3/component3.component';



@NgModule({
  declarations: [
    Component1Component,
    Component2Component,
    Component3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AppModule
  ],
  bootstrap: [Component1Component]
})
export class Module1Module { }

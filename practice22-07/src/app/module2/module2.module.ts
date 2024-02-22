import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Component4Component } from './component4/component4.component';


@NgModule({
  declarations: [
    Component4Component
  ],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }

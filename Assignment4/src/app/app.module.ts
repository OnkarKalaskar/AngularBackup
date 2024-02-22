import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { FullNamePipe } from './full-name.pipe';
import { DetailsPipe } from './details.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Assignment4Component,
    FullNamePipe,
    DetailsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { SuperchildcomponentComponent } from './superchildcomponent/superchildcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveformComponent,
    RegistrationformComponent,
    ParentcomponentComponent,
    ChildcomponentComponent,
    SuperchildcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent,TemplateFormComponent,ReactiveformComponent]
})
export class AppModule { }

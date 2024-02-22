import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { Assignment3FormComponent } from './assignment3-form/assignment3-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { MyPipePipe } from './my-pipe.pipe';
import { AngularServiceService } from './ServiceFolder/angular-service.service';
import { ProductDataComponent } from './product-data/product-data.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutUsComponent,
    ReactiveFormComponentComponent,
    AssignmentFormComponent,
    Assignment3FormComponent,
    TemplateFormComponent,
    PipesComponent,
    MyPipePipe,
    ProductDataComponent,
    TwowaybindingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AngularServiceService],
  bootstrap: [AppComponent,ServicesComponent,ContactUsComponent,PipesComponent,ProductDataComponent]
})
export class AppModule { }

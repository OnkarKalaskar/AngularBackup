import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { Assignment3FormComponent } from './assignment3-form/assignment3-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

const routes: Routes = [
  {path: "Services" , component : ServicesComponent},
  {path: "home", component: AppComponent},
  {path: "contact", component: ContactUsComponent},
  {path: "About", component: AboutUsComponent},
  {path: "form",component:ReactiveFormComponentComponent},
  {path: "assignForm", component: AssignmentFormComponent},
  {path: "registration", component: Assignment3FormComponent},
  {path : "regByTempDriven", component: TemplateFormComponent},
  {path: "pipes", component: PipesComponent},
  {path : "productService", component: ProductDataComponent},
  {path: "2WayBinding", component: TwowaybindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ServicesComponent,AppComponent,ContactUsComponent,
  AboutUsComponent,ReactiveFormComponentComponent,AssignmentFormComponent,
  Assignment3FormComponent,TemplateFormComponent,PipesComponent,ProductDataComponent,TwowaybindingComponent];

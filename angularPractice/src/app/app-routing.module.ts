import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  { path:'', component:TemplateFormComponent},
  {path:"reactiveForm", component : ReactiveformComponent},
  {path : "examForm",component:RegistrationformComponent},
  {path : "inputEx", component : ParentcomponentComponent},
  {path : "gotoSubcategories/:cat", component:ChildcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ReactiveformComponent,TemplateFormComponent
]

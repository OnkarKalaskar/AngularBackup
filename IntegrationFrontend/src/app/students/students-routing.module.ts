import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { GetbyidComponent } from './getbyid/getbyid.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: "students/home", component:HomeComponent},
  {path: "students/create",component:CreateComponent},
  {path : "students/getbyId", component : GetbyidComponent},
  {path : "students/update" , component : UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

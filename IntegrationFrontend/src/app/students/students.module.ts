import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetbyidComponent } from './getbyid/getbyid.component';
import { UpdateComponent } from './update/update.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    GetbyidComponent,
    UpdateComponent,
    MoviesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }

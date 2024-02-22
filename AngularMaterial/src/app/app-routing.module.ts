import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageListComponent } from './page-list/page-list.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path : "userHome", component: HomeComponent},
  {path: 'pagelist', component: PageListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

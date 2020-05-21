import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateComponent} from './update/update.component';
import {DisplayComponent} from './display/display.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"updateStatement",component:UpdateComponent},
  {path:"viewStatements",component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from "./about-us/about-us.component";
import {AiComponent} from "./ai/ai.component";
import {ContactComponent} from "./contact/contact.component";


const routes: Routes = [
  {path:"aboutus",component:AboutUsComponent},
  {path:"ai",component:AiComponent},
  {path:"contact",component:ContactComponent},
  {path:"", redirectTo:"aboutus",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

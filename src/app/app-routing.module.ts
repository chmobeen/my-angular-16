import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import URLS from "./shared/urls"

const routes: Routes = [
  { path: '', redirectTo: "signin", pathMatch: 'full' },
  { path: URLS.signin, component: SigninComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'contact-list', component: ContactListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

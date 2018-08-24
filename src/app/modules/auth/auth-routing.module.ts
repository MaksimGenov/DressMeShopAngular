import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFromComponent } from './components/register-from/register-from.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register',  component: RegisterFromComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

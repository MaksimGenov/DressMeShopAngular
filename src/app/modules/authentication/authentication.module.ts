import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthService } from '../../services/auth-service/auth.service';
import { RegisterFromComponent } from './components/register-from/register-from.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginFormComponent,
    RegisterFromComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthenticationModule { }

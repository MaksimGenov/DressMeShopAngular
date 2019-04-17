import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CartComponent } from './components/cart/cart.component';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@NgModule({
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    SharedModule
  ],
  declarations: [
    CartComponent
  ],
  providers: [
    AuthService
  ]
})
export class ProfilePageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from '../../services/cart-service/cart.service';
import { SharedModule } from '../shared/shared.module';

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
    CartService
  ]
})
export class ProfilePageModule { }

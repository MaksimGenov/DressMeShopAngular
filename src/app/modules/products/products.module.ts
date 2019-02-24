import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductService } from 'src/app/services/product-service/product.service';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductCardComponent,
    ProductDetailsComponent,
    ProductsListComponent
  ],
  providers: [
    ProductService,
    CartService
  ]
})
export class ProductsModule { }

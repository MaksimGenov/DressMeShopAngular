import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsPageRoutingModule } from './all-products-page-routing.module';

import { AllProductsMainComponent } from './components/all-products-main/all-products-main.component';

import { BrandService } from '../../services/brand-service/brand.service';

@NgModule({
  imports: [
    CommonModule,
    AllProductsPageRoutingModule
  ],
  declarations: [AllProductsMainComponent],
  providers: [BrandService]
})
export class AllProductsPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BrandsRoutingModule } from './brands-routing.module';

import { BrandsListComponent } from './components/brands-list/brands-list.component';
import { BrandCardComponent } from './components/brand-card/brand-card.component';

import { BrandService } from '../../services/brand-service/brand.service';

@NgModule({
  imports: [
    CommonModule,
    BrandsRoutingModule,
    SharedModule
  ],
  declarations: [
    BrandsListComponent,
    BrandCardComponent
  ],
  providers: [
    BrandService
  ]
})
export class BrandsModule { }

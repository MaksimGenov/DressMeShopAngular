import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsPageRoutingModule } from './brands-page-routing.module';
import { BrandsMainComponent } from './components/brands-main/brands-main.component';
import { SharedModule } from '../shared/shared.module';
import { BrandsListComponent } from './components/brands-list/brands-list.component';
import { BrandCardComponent } from './components/brand-card/brand-card.component';
import { BrandProductsListComponent } from './components/brand-products-list/brand-products-list.component';
import { BrandService } from '../../services/brand-service/brand.service';
import { LinkGeneratorService } from '../../services/link-generator/link-generator.service';
import { MyFormsModule } from '../forms/forms.module';

@NgModule({
  imports: [
    CommonModule,
    BrandsPageRoutingModule,
    SharedModule,
    MyFormsModule
  ],
  declarations: [
    BrandsMainComponent,
    BrandsListComponent,
    BrandCardComponent,
    BrandProductsListComponent
  ],
  providers: [
    BrandService,
    LinkGeneratorService
  ]
})
export class BrandsPageModule { }

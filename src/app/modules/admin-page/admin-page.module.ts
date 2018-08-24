import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageRoutingModule } from './admin-page-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { AddCategoryFormComponent } from './components/add-category-form/add-category-form.component';
import { AddBrandFormComponent } from './components/add-brand-form/add-brand-form.component';

import { BrandService } from '../../services/brand-service/brand.service';
import { CategoryService } from '../../services/category-service/category.service';
import { ImageService } from '../../services/image-service/image.service';
import { ProductService } from '../../services/product-service/product.service';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';
import { EditBrandFormComponent } from './components/edit-brand-form/edit-brand-form.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminMainComponent,
    AddCategoryFormComponent,
    AddBrandFormComponent,
    AddProductFormComponent,
    EditProductFormComponent,
    EditBrandFormComponent
  ],
  providers: [
    BrandService,
    CategoryService,
    ImageService,
    ProductService
  ]

})
export class AdminPageModule { }

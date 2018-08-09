import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddBrandFormComponent } from './components/add-brand-form/add-brand-form.component'
import { BrandService } from '../../services/brand-service/brand.service';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { CategoryService } from '../../services/category-service/category.service';
import { SharedModule } from '../shared/shared.module';
import { ImageService } from '../../services/image-service/image.service';
import { ProductService } from '../../services/product-service/product.service';
import { AddCategoryFormComponent } from './components/add-category-form/add-category-form/add-category-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [AddBrandFormComponent, AddProductFormComponent, AddCategoryFormComponent],
  exports: [],
  providers: [BrandService, CategoryService, ImageService, ProductService]
})
export class MyFormsModule { }

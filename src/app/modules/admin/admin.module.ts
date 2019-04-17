import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
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
import { EditCategoryFormComponent } from './components/edit-category-form/edit-category-form.component';
import { TestComponent } from './components/test/test.component';
import { SizeService } from 'src/app/services/size-service/size.service';
import { AddSizeFormComponent } from './components/add-size-form/add-size-form.component';
import { SizesAndQuantityComponent } from './components/sizes-and-quantity/sizes-and-quantity.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
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
    EditBrandFormComponent,
    EditCategoryFormComponent,
    TestComponent,
    AddSizeFormComponent,
    SizesAndQuantityComponent
  ],
  providers: [
    BrandService,
    CategoryService,
    ImageService,
    ProductService,
    SizeService
  ]

})
export class AdminModule { }

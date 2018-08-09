import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesPageRoutingModule } from './categories-page-routing.module';

import { CategoryService } from '../../services/category-service/category.service';
import { CategoriesMainComponent } from './components/categories-main/categories-main.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { SharedModule } from '../shared/shared.module';
import { LinkGeneratorService } from '../../services/link-generator/link-generator.service';
import { CategoryProductsListComponent } from './components/category-products-list/category-products-list.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesPageRoutingModule,
    SharedModule
  ],
  declarations: [
    CategoriesMainComponent,
    CategoriesListComponent,
    CategoryProductsListComponent
  ],
  providers: [
    CategoryService,
    LinkGeneratorService
  ]
})
export class CategoriesPageModule { }

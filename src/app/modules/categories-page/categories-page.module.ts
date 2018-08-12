import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesPageRoutingModule } from './categories-page-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CategoriesMainComponent } from './components/categories-main/categories-main.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryProductsListComponent } from './components/category-products-list/category-products-list.component';

import { CategoryService } from '../../services/category-service/category.service';
import { LinkGeneratorService } from '../../services/link-generator/link-generator.service';

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

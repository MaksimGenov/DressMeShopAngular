import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';

import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';

import { CategoryService } from '../../services/category-service/category.service';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ],
  declarations: [
    CategoriesListComponent,
    CategoryCardComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CategoriesModule { }

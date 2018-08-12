import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesMainComponent } from './components/categories-main/categories-main.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryProductsListComponent } from './components/category-products-list/category-products-list.component';
import { ProductDetailsComponent } from '../shared/components/product-details/product-details.component';

const routes: Routes = [
  {path: '', component: CategoriesMainComponent,
  children: [
    {path: '', component: CategoriesListComponent},
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: ':id/products', component: CategoryProductsListComponent}
  ]  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesPageRoutingModule { }

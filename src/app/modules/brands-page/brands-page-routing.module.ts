import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandsMainComponent } from './components/brands-main/brands-main.component';
import { BrandsListComponent } from './components/brands-list/brands-list.component';
import { BrandProductsListComponent } from './components/brand-products-list/brand-products-list.component';
import { ProductDetailsComponent } from '../shared/components/product-details/product-details.component';

const routes: Routes = [
  {path:'', component: BrandsMainComponent, children: [
    {path: '', component: BrandsListComponent},
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: ':id/products', component: BrandProductsListComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsPageRoutingModule { }

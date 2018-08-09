import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {path: 'brands', loadChildren: './modules/brands-page/brands-page.module#BrandsPageModule'},
  {path: 'all', loadChildren: './modules/all-products-page/all-products-page.module#AllProductsPageModule'},
  {path: 'categories', loadChildren: './modules/categories-page/categories-page.module#CategoriesPageModule'},
  {path: 'admin', loadChildren: './modules/admin-page/admin-page.module#AdminPageModule'},
  {path: '', loadChildren: './modules/home/home.module#HomeModule'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ProductDetailsComponent } from './modules/shared/components/product-details/product-details.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'brands', loadChildren: './modules/brands-page/brands-page.module#BrandsPageModule'},
  {path: 'all', loadChildren: './modules/all-products-page/all-products-page.module#AllProductsPageModule'},
  {path: 'categories', loadChildren: './modules/categories-page/categories-page.module#CategoriesPageModule'},
  {path: 'admin', canLoad: [AdminGuard], loadChildren: './modules/admin-page/admin-page.module#AdminPageModule'},
  {path: 'auth', loadChildren: './modules/auth-page/auth-page.module#AuthPageModule'},
  {path: 'user', canLoad: [UserGuard], loadChildren: './modules/profile-page/profile-page.module#ProfilePageModule' },
  {path: 'home', loadChildren: './modules/home/home.module#HomeModule'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AdminGuard } from 'src/app/guards/admin.guard';
import { UserGuard } from 'src/app/guards/user.guard';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'products', loadChildren: 'src/app/modules/products/products.module#ProductsModule'},
  {path: 'brands', loadChildren: 'src/app/modules/brands/brands.module#BrandsModule'},
  {path: 'categories', loadChildren: 'src/app/modules/categories/categories.module#CategoriesModule'},
  {path: 'admin', canLoad: [AdminGuard], loadChildren: 'src/app/modules/admin/admin.module#AdminModule'},
  {path: 'auth', loadChildren: 'src/app/modules/authentication/authentication.module#AuthenticationModule'},
  {path: 'user', canLoad: [UserGuard], loadChildren: 'src/app/modules/profile-page/profile-page.module#ProfilePageModule' },
  {path: 'home', loadChildren: 'src/app/modules/home/home.module#HomeModule'},
  {path: 'test', component: TestComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

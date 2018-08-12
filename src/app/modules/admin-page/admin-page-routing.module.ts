import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AddBrandFormComponent } from './components/add-brand-form/add-brand-form.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { AddCategoryFormComponent } from './components/add-category-form/add-category-form.component';

const routes: Routes = [
  {
    path: '', component: AdminMainComponent,
    children: [
      {path: 'addBrand', component: AddBrandFormComponent},
      {path: 'addProduct', component: AddProductFormComponent},
      {path: 'addCategory', component: AddCategoryFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }

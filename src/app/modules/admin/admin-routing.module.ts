import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AddBrandFormComponent } from './components/add-brand-form/add-brand-form.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { AddCategoryFormComponent } from './components/add-category-form/add-category-form.component';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';
import { EditBrandFormComponent } from './components/edit-brand-form/edit-brand-form.component';
import { EditCategoryFormComponent } from './components/edit-category-form/edit-category-form.component';
import { TestComponent } from './components/test/test.component';
import { AddSizeFormComponent } from './components/add-size-form/add-size-form.component';

const routes: Routes = [
  {
    path: '', component: AdminMainComponent,
    children: [
      {path: 'addBrand', component: AddBrandFormComponent},
      {path: 'addProduct', component: AddProductFormComponent},
      {path: 'editProduct/:id', component: EditProductFormComponent},
      {path: 'addCategory', component: AddCategoryFormComponent},
      {path: 'brands/edit/:id', component: EditBrandFormComponent},
      {path: 'categories/edit/:id', component: EditCategoryFormComponent},
      {path: 'addSize', component: AddSizeFormComponent},
      {path: 'test', component: TestComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

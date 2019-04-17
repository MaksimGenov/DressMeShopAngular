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
  {path: '' , pathMatch: 'full', redirectTo: "add"},
  {path: 'add', component: AdminMainComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'product'},
    {path: 'brand', component: AddBrandFormComponent},
    {path: 'product', component: AddProductFormComponent},
    {path: 'category', component: AddCategoryFormComponent},
    {path: 'size', component: AddSizeFormComponent}
  ]},
  {path: 'edit-product/:id', component: EditProductFormComponent},
  {path: 'edit-brand/:id', component: EditBrandFormComponent},
  {path: 'edit-category/:id', component: EditCategoryFormComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

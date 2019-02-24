import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesMainComponent } from './components/categories-main/categories-main.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';

const routes: Routes = [
  {
    path: '', component: CategoriesMainComponent,
    children: [
      { path: '', component: CategoriesListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

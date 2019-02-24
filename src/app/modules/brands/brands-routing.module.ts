import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandsMainComponent } from './components/brands-main/brands-main.component';
import { BrandsListComponent } from './components/brands-list/brands-list.component';

const routes: Routes = [
  {path:'', component: BrandsMainComponent, children: [
    {path: '', component: BrandsListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }

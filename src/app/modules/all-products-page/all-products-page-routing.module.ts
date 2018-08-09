import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsMainComponent } from './components/all-products-main/all-products-main.component';

const routes: Routes = [
  {path: '', component: AllProductsMainComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllProductsPageRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { NavVerticalComponent } from './components/nav-vertical/nav-vertical.component';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MyFormsModule } from '../forms/forms.module';
import { SelectedDirective } from './directives/selected.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavLinkComponent,
    NavVerticalComponent,
    ProductsListComponent,
    ProductCardComponent,
    PaginationComponent,
    SelectedDirective,
  ],
  exports: [
    NavLinkComponent,
    NavVerticalComponent,
    ProductsListComponent,
    ProductCardComponent,
    PaginationComponent,
    SelectedDirective,
  ],
})
export class SharedModule { }

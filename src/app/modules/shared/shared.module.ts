import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { NavVerticalComponent } from './components/nav-vertical/nav-vertical.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SelectedDirective } from './directives/selected.directive';
import { NavHorizontalComponent } from './components/nav-horizontal/nav-horizontal.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

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
    NavHorizontalComponent,
    SpinnerComponent,
    CarouselComponent,
    ProductDetailsComponent,
  ],
  exports: [
    NavLinkComponent,
    NavVerticalComponent,
    ProductsListComponent,
    ProductCardComponent,
    PaginationComponent,
    SelectedDirective,
    NavHorizontalComponent,
    SpinnerComponent,
  ],
})
export class SharedModule { }

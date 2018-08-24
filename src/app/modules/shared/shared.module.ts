import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { NavVerticalComponent } from './components/nav-vertical/nav-vertical.component';
import { NavHorizontalComponent } from './components/nav-horizontal/nav-horizontal.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ZoomDirective } from './directives/zoom/zoom.directive';
import { SelectedDirective } from './directives/selected.directive';
import { CartService } from '../../services/cart-service/cart.service';
import { AuthService } from '../../services/auth-service/auth.service';

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
    ZoomDirective,
  ],
  providers: [
    CartService,
    AuthService,
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
    ZoomDirective,
  ],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ZoomDirective } from './directives/zoom/zoom.directive';
import { AuthService } from '../../services/auth-service/auth.service';
import { ResizerDirective } from './resizer/resizer.directive';
import { ImgWithSpinnerComponent } from './components/img-with-spinner/img-with-spinner.component';
import { MultiselectDropdownComponent } from './components/multiselect-dropdown/multiselect-dropdown.component';
import { ClickOutsideDirective } from './directives/click-outside/click-outside.directive';
import { NavVerticalComponent } from './components/nav-vertical/nav-vertical.component';
import { NavHorizontalComponent } from './components/nav-horizontal/nav-horizontal.component';
import { NavDropdownComponent } from './components/nav-dropdown/nav-dropdown.component';
import { LinkComponent } from './components/link/link.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { CubeComponent } from './components/cube/cube.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavLinkComponent,
    PaginationComponent,
    SpinnerComponent,
    CarouselComponent,
    ZoomDirective,
    ResizerDirective,
    ImgWithSpinnerComponent,
    MultiselectDropdownComponent,
    ClickOutsideDirective,
    NavVerticalComponent,
    NavHorizontalComponent,
    NavDropdownComponent,
    LinkComponent,
    NavTabsComponent,
    CubeComponent
  ],
  providers: [
    AuthService,
  ],
  exports: [
    NavLinkComponent,
    PaginationComponent,
    SpinnerComponent,
    ZoomDirective,
    ResizerDirective,
    ImgWithSpinnerComponent,
    CarouselComponent,
    MultiselectDropdownComponent,
    ClickOutsideDirective,
    NavVerticalComponent,
    NavHorizontalComponent,
    NavDropdownComponent,
    LinkComponent,
    NavTabsComponent,
    CubeComponent
  ],
})
export class SharedModule { }

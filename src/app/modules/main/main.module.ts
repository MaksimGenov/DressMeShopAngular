import { AppComponent } from "./components/main/app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MainRoutingModule } from "./main-routing.module";
import { SharedModule } from "../shared/shared.module";
import { Fetcher } from "src/app/utils/Fetcher";
import { httpInterceptorProviders } from "src/app/interceptors";
import { NgModule } from "@angular/core";
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "src/app/services/product-service/product.service";
import { FormDataBuilder } from "src/app/utils/FormDataBuilder/FormDataBuilder";
import { CategoryService } from "src/app/services/category-service/category.service";
import { TestComponent } from "./components/test/test.component";
import { BrandService } from "src/app/services/brand-service/brand.service";
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPanelComponent,
    TestComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    MainRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    httpInterceptorProviders,
    Fetcher,
    ProductService,
    FormDataBuilder,
    CategoryService,
    BrandService
  ],
  bootstrap: [AppComponent]
})
export class MainModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ProductService } from './services/product-service/product.service';
import { HeaderComponent } from './header/header.component';
import { Fetcher } from './utils/Fetcher';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    ProductService,
    Fetcher,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

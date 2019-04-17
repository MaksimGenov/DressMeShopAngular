import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeMainComponent]
})
export class HomeModule { }

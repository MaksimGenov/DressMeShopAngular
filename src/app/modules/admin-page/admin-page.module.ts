import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { SharedModule } from '../shared/shared.module';
import { MyFormsModule } from '../forms/forms.module';

@NgModule({
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    MyFormsModule,
    SharedModule
  ],
  declarations: [AdminMainComponent]
})
export class AdminPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlashSalesComponent} from './flash-sales.component';
import {ProductModule} from '../product/product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlashSalesComponent,
  ],
  exports: [
    FlashSalesComponent,
  ]
})
export class FlashSalesModule { }

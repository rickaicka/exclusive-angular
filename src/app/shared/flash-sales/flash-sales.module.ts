import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlashSalesComponent} from './flash-sales.component';
import {ProductThumbnailModule} from '../product-thumbnail/product-thumbnail.module';



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

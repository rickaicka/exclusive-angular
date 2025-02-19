import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightsBannerComponent} from './highlights-banner.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HighlightsBannerComponent
  ],
  exports: [
    HighlightsBannerComponent
  ]
})
export class HighlightsBannerModule { }

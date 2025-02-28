import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopHeaderModule} from './top-header/top-header.module';
import {HeaderModule} from './header/header.module';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SidebarCategoriesModule} from './sidebar-categories/sidebar-categories.module';
import {HighlightsBannerModule} from './highlights-banner/highlights-banner.module';
import {ProductModule} from './product/product.module';
import {FlashSalesModule} from './flash-sales/flash-sales.module';

const CustomModules: any[] = [
  TopHeaderModule,
  HeaderModule,
  SidebarCategoriesModule,
  HighlightsBannerModule,
  ProductModule,
  FlashSalesModule
]
const AngularModules: any[] = [
  RouterLink,
  RouterOutlet,
  FormsModule,
  ReactiveFormsModule,
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...AngularModules,
    ...CustomModules,
  ],
  exports: [
    ...AngularModules,
    ...CustomModules,
  ]
})
export class SharedModule { }

import {ApplicationModule, NgModule} from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import {TopHeaderModule} from './top-header/top-header.module';
import {HeaderModule} from './header/header.module';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SidebarCategoriesModule} from './sidebar-categories/sidebar-categories.module';
import {HighlightsBannerModule} from './highlights-banner/highlights-banner.module';
import {ProductThumbnailModule} from './product-thumbnail/product-thumbnail.module';
import {FlashSalesModule} from './flash-sales/flash-sales.module';
import {RateStarModule} from './rate-star/rate-star.module';
import {CategoriesModule} from './categories/categories.module';
import {CategoryThumbnailModule} from './category-thumbnail/category-thumbnail.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const CustomModules: any[] = [
  TopHeaderModule,
  HeaderModule,
  SidebarCategoriesModule,
  HighlightsBannerModule,
  ProductThumbnailModule,
  FlashSalesModule,
  RateStarModule,
  CategoriesModule,
  CategoryThumbnailModule
]
const AngularModules: any[] = [
  RouterLink,
  RouterOutlet,
  FormsModule,
  ReactiveFormsModule,
  CommonModule
]
@NgModule({
  declarations: [],
  imports: [
    ...AngularModules,
    ...CustomModules,
  ],
  exports: [
    ...AngularModules,
    ...CustomModules,
  ]
})
export class SharedModule { }

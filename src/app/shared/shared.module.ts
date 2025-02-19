import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopHeaderModule} from './top-header/top-header.module';
import {HeaderModule} from './header/header.module';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SidebarCategoriesModule} from './sidebar-categories/sidebar-categories.module';
import {HighlightsBannerModule} from './highlights-banner/highlights-banner.module';

const CustomModules: any[] = [
  TopHeaderModule,
  HeaderModule,
  SidebarCategoriesModule,
  HighlightsBannerModule
]

export const AngularModules: any[] = [
  RouterLink,
  RouterOutlet,
  FormsModule,
  ReactiveFormsModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...CustomModules,
  ],
  exports: [
    ...CustomModules,
  ]
})
export class SharedModule { }

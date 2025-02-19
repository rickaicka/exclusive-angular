import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarCategoriesComponent} from './sidebar-categories.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarCategoriesComponent
  ],
  exports: [
    SidebarCategoriesComponent
  ]
})
export class SidebarCategoriesModule { }

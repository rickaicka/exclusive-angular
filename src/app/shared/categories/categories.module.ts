import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesComponent} from './categories.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoriesComponent
  ],
  exports: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopHeaderModule} from './top-header/top-header.module';
import {HeaderModule} from './header/header.module';
import {RouterLink, RouterOutlet} from '@angular/router';

const CustomModules: any[] = [
  TopHeaderModule,
  HeaderModule
]

export const AngularModules: any[] = [
  RouterLink,
  RouterOutlet,
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

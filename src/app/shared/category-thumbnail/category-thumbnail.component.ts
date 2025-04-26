import {Component, Input, OnInit} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {Category} from '../../models/category.model';
import {CategoryImageType} from '../../types/category-image.type';
import {ICategory} from '../../interfaces/category.interface';

@Component({
  selector: 'app-category-thumbnail',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './category-thumbnail.component.html',
  styleUrl: './category-thumbnail.component.scss'
})
export class CategoryThumbnailComponent implements OnInit {

  @Input() categoryItem: Category = new Category();
  constructor() { }

  ngOnInit(): void {
    console.log(this.categoryItem);
  }


}

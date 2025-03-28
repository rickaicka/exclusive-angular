import {Component, Input, OnInit} from '@angular/core';
import {ProductThumbnailComponent} from '../product-thumbnail/product-thumbnail.component';
import {interval, takeWhile, tap} from 'rxjs';
import {CategoryThumbnailComponent} from '../category-thumbnail/category-thumbnail.component';
import {CategoryThumbnailModule} from '../category-thumbnail/category-thumbnail.module';
import {Category} from '../../models/category.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryThumbnailModule,
    NgForOf
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  constructor() {
  }

  @Input() categoryList: Array<Category> = Array<Category>();

  ngOnInit() {
  }


  scrollLeft(el: Element) {
    const animTimeMs = 400;
    const pixelsToMove = 315;
    const stepArray = [0.001, 0.021, 0.136, 0.341, 0.341, 0.136, 0.021, 0.001];
    interval(animTimeMs / 8)
      .pipe(
        takeWhile(value => value < 8),
        tap(value => el.scrollLeft -= (pixelsToMove * stepArray[value])),
      )
      .subscribe();
  }
  scrollRight(el: Element) {
    const animTimeMs = 400;
    const pixelsToMove = 315;
    const stepArray = [0.001, 0.021, 0.136, 0.341, 0.341, 0.136, 0.021, 0.001];
    interval(animTimeMs / 8)
      .pipe(
        takeWhile(value => value < 8),
        tap(value => el.scrollLeft += (pixelsToMove * stepArray[value])),
      )
      .subscribe();
  }
}

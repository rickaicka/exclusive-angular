import {Component, Input, OnInit} from '@angular/core';
import {ProductThumbnailModule} from '../product-thumbnail/product-thumbnail.module';
import {interval, takeWhile, tap} from 'rxjs';
import {environment} from '../../../environments/environment';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-flash-sales',
  standalone: true,
  imports: [ProductThumbnailModule, NgIf],
  templateUrl: './flash-sales.component.html',
  styleUrl: './flash-sales.component.scss'
})
export class FlashSalesComponent implements OnInit {

  @Input() showTimer = false;
  @Input() titleContainer = '';
  @Input() titleHighlight = '';

  constructor() {
  }

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

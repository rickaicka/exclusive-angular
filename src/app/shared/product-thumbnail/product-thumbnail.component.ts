import { Component } from '@angular/core';
import {RateStarModule} from '../rate-star/rate-star.module';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-product-thumbnail',
  standalone: true,
  imports: [RateStarModule],
  templateUrl: './product-thumbnail.component.html',
  styleUrl: './product-thumbnail.component.scss'
})
export class ProductThumbnailComponent {

  public env: { IMG_SRC: string };

  constructor() {
    this.env = environment;
  }
}

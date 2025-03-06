import { Component } from '@angular/core';
import {RateStarModule} from '../rate-star/rate-star.module';

@Component({
  selector: 'app-product-thumbnail',
  standalone: true,
  imports: [RateStarModule],
  templateUrl: './product-thumbnail.component.html',
  styleUrl: './product-thumbnail.component.scss'
})
export class ProductThumbnailComponent {

}

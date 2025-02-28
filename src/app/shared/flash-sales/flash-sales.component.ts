import { Component } from '@angular/core';
import {ProductModule} from '../product/product.module';

@Component({
  selector: 'app-flash-sales',
  standalone: true,
  imports: [ProductModule],
  templateUrl: './flash-sales.component.html',
  styleUrl: './flash-sales.component.scss'
})
export class FlashSalesComponent {

}

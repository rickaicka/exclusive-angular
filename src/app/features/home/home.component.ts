import {Component, inject, OnInit} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  productsService = inject(ProductsService);

  ngOnInit(){
    //this.getProducts();
  }


  // getProducts(){
  //   this.productsService.getProducts().subscribe((data) => {
  //     console.log(data);
  //   });
  // }

}

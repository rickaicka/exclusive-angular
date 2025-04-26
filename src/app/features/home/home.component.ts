import {Component, inject, OnInit} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ProductsService} from '../../services/products.service';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../models/category.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private productsService = inject(ProductsService);
  private categoriesService = inject(CategoryService);

  public categoriesList: Array<Category> = Array<Category>();
  public titleFlashSales = 'Flash Sales';
  public titleBestSelling = 'Best Selling Products';
  public titleFlashHighlight = "Today's";
  public titleBestSellingHighlight = "This Month";

  ngOnInit(){
    this.getProducts();
    this.getCategories();
  }


  getProducts(){
    this.productsService.getProducts().subscribe((data) => {
      console.log(data);
    });
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe((data) => {
      this.categoriesList = data;
    })
  }

}

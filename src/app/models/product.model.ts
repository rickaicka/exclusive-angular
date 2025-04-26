import {Category} from './category.model';
import {CategoryImageType} from '../types/category-image.type';
import {IProduct} from '../interfaces/product.interface';
import {TagsType} from '../types/tag.type';
import {BrandType} from '../types/brand.type';

export class Product implements IProduct{
  active: boolean = false;
  bestSelling: boolean = false;
  brand: BrandType | undefined;
  categories: Array<Category> = [];
  color: Array<string> | string = '';
  description: string = '';
  discount: number = 0;
  discountPrice?: number;
  flashSales: boolean = false;
  highlight: boolean = false;
  id: number = 0;
  images: Array<Omit<CategoryImageType, "category">> = [];
  isNew:boolean = false;
  name: string = '';
  price: number = 0;
  rating: number = 0;
  review: string = '';
  sizes: Array<string> | string | undefined;
  stock_quantity: number = 0;
  tags: TagsType = [];

  constructor(data: IProduct) {
    Object.assign(this, data);
  }
}

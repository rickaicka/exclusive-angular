import {CategoryImageType} from './category.model';

export class Product{}

export type ProductType = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: Omit<CategoryImageType, "category">;
  category: number;
  brand: number;
  stock: number;
  discount: number;
  discountPrice: number;
  rating: number;
  reviews: number;
  sold: number;
  active: boolean;
  flashSales: boolean;
  bestSelling: boolean;
  highlight: boolean;
  tags: Array<string>;
  colors: Array<string>;
  sizes: Array<string>;
}

import {CategoryImageType} from '../types/category-image.type';
import {Category} from '../models/category.model';
import {TagsType} from '../types/tag.type';
import {BrandType} from '../types/brand.type';

export interface IProduct {
  active: boolean;
  bestSelling: boolean;
  brand: BrandType | undefined;
  categories: Array<Category> | undefined;
  color: Array<string> | string | undefined;
  description: string;
  discount: number;
  discountPrice?: number;
  flashSales: boolean;
  highlight: boolean;
  id: number;
  images: Array<Omit<CategoryImageType, "category">>;
  isNew:boolean;
  name: string;
  price: number;
  rating: number;
  review: string;
  sizes: Array<string> | string | undefined;
  stock_quantity: number;
  tags: TagsType;
}

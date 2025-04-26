import {CategoryImageType} from '../types/category-image.type';

export interface ICategory {
  id: number;
  name: string;
  image: CategoryImageType;
}

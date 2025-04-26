import {ICategory} from '../interfaces/category.interface';
import {CategoryImageType} from '../types/category-image.type';

export class Category implements ICategory{
  id: number = 0;
  name: string = '';
  image: CategoryImageType = {category: 0, id: 0, image: '', name: ''};

  constructor(data?: ICategory) {
    Object.assign(this, data);
  }
}

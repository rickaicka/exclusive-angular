export class Category{
  id: number = 0;
  name: string = '';
  image: CategoryImageType = {category: 0, id: 0, image: '', name: ''};
}

export type CategoryImageType = {
  category: number;
  id: number;
  image: string;
  name: string;
}

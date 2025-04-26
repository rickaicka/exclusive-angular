import {IBrand} from '../interfaces/brand.interface';

export class Brand implements IBrand {
  id: number = 0;
  name: string = '';

  constructor(data: IBrand) {
    Object.assign(this, data);
  }
}

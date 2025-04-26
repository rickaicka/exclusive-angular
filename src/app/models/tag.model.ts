import {ITag} from '../interfaces/tag.interface';

export class Tag implements ITag {
  id: number = 0;
  name: string = '';

  constructor(data: ITag) {
    Object.assign(this, data);
  }
}

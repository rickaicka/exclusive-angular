import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor() {
  }

  searchValue: any = '';
  wishListCount: number = 0;
  cartCount: number = 0;

  onSearchChange() {
    console.log(this.searchValue)
  }
  onChangeInput(p: any) {
    this.searchValue = p.target.value;
  }

  onWishListChange(count: number) {
    this.wishListCount = count;
  }

  onCartChange(count: number) {
    this.cartCount = count;
  }

}

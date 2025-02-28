import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://ricardosalimd.pythonanywhere.com/'

  constructor(private http: HttpClient) { }

  // getProducts() {
  //   return this.http.get<any>(this.apiUrl + 'products');
  // }
}

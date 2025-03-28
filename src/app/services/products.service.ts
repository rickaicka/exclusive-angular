import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(this.apiUrl + 'products');
  }
}

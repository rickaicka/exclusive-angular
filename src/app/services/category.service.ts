import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any>(this.apiUrl + 'categories');
  }
}

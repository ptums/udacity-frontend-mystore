import { Injectable } from '@angular/core';
import { Product } from '../types/product.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private apiUrl =
    'https://raw.githubusercontent.com/udacity/nd-0067-c3-angular-fundamentals-project-starter/main/src/assets/data.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}

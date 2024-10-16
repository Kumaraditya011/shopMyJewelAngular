import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private jsonUrl = '../assets/product-list.json';

  constructor(private http: HttpClient) { }

  getProductData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }
}

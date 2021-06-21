import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly BASE_URL = 'http://localhost:3000/products';

  constructor(private readonly http: HttpClient) {}

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BASE_URL}/create`, product);
  }

  deleteProduct(productId: string): Observable<Product> {
    return this.http.delete<Product>(`${this.BASE_URL}/delete/${productId}`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}`);
  }

  getProduct(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/${productId}`);
  }

  updateProduct(
    productId: string | undefined,
    product: Product
  ): Observable<Product> {
    return this.http.put<Product>(
      `${this.BASE_URL}/update/${productId}`,
      product
    );
  }
}

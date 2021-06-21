import { Component, OnInit } from '@angular/core';

import { Product } from '../../interfaces/Product';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  deleteProduct(productId: any): void {
    this.productsService
      .deleteProduct(productId)
      .subscribe(() => this.getProducts(), console.error);
  }

  getProducts(): void {
    this.productsService
      .getProducts()
      .subscribe(
        (response: any) => (this.products = response.products),
        console.error
      );
  }
}

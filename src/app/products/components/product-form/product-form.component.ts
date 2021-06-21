import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../interfaces/Product';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  edit = false;
  product: Product = {
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
  };

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params)
      this.productsService.getProduct(params.id).subscribe((response) => {
        this.product = response;
        this.edit = true;
      }, console.error);
  }

  submitProduct(): void {
    this.productsService
      .createProduct(this.product)
      .subscribe(() => this.router.navigate(['/']), console.error);
  }

  updateProduct(): void {
    delete this.product.createdAt;
    this.productsService
      .updateProduct(this.product._id, this.product)
      .subscribe(() => this.router.navigate(['/product']), console.error);
  }
}

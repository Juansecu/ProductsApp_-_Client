import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent, ProductFormComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [ProductFormComponent],
})
export class ProductsModule {}

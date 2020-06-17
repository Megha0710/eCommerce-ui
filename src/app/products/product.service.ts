import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor() { }
  private products: Product[] = [];

  setProducts(products: Product[]) {
    this.products = products;
  }
  getProducts() {
    return this.products;
  }
}
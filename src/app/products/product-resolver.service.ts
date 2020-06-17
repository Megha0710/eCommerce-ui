import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { ProductService } from './product.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductsResolverService implements Resolve<Product[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private productService: ProductService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.productService.getProducts();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchProducts();
    } else {
      this.dataStorageService.isLoading=false;
      return recipes;
    }
  }
}

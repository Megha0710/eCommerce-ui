import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../products/product.service';
import { Product } from '../products/product.model';
import { CartItem } from '../cart/cart-item.model';
import { DataStorageService } from '../shared/data-storage.service';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public products:Array<Product>;
  private sub;
  constructor(
       private productService:ProductService,
       private cartService:CartService,
       private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  addToCart = (product) => {
      this.cartService.addToCart({product,quantity:1})
  };

}

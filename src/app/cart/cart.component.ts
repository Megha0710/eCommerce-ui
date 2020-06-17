import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from './cart-item.model';
import { DataStorageService } from '../shared/data-storage.service';
import { CartBaseComponent } from './cart-base.component';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends CartBaseComponent{
  constructor(protected cartService: CartService) {
    super(cartService);
}

ngOnInit() {

}
changeQuantity = (cart,quantity) => {
    cart.quantity = quantity;
    this.cartService.reloadCart(this.cartList);
}

}

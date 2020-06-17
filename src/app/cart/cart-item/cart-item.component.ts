import { Component, OnInit, Input, Output, EventEmitter, HostBinding, ElementRef } from '@angular/core';
import { CartItem } from '../cart-item.model';
import { CartBaseComponent } from '../cart-base.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  host: {
    '(document:click)': 'onPageClick($event)',
}
})
export class CartItemComponent extends CartBaseComponent {
  @HostBinding("class.visible") isVisible:boolean = false;  
  constructor(
    public cartService: CartService,
    private eleref: ElementRef
) {
    super(cartService);
}

ngOnInit() {
  this.cartService.toggleCartSubject.subscribe(res => {
      this.isVisible = res;
  });
}
onPageClick = (event) => {
  if (this.isVisible && !this.eleref.nativeElement.contains(event.target) && event.target.className !== 'cart-remove'){
      this.cartService.toggleCart();
  }
};

changeQuantity = (cart,quantity) => {
  cart.quantity = quantity;
  this.cartService.reloadCart(this.cartList);
}
}

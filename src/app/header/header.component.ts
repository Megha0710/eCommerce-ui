import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { CartItem } from '../cart/cart-item.model';
import { CartService } from '../cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartTotal: number = 0;
  cartItems: CartItem[] = [];
  public cart_num: number;
  sub: Subscription;
  constructor(public dataStorageService: DataStorageService, private cartService: CartService) { }

  ngOnInit(): void {
    this.sub = this.dataStorageService.fetchProducts().subscribe();
    this.cartService.cartListSubject
      .subscribe(res => {
        this.cart_num = res.reduce(function (prev, cur) {
          return prev + cur.quantity;
        }, 0)
      })
  }
  toggleCartPopup = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.toggleCart()
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}


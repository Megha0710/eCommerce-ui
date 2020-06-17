import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Cart } from './cart.model';

@Injectable()
export class CartService {

    public cartListSubject = new BehaviorSubject([]);
    public toggleCartSubject = new BehaviorSubject(false);

    toggleCart = () => {
        this.toggleCartSubject.next(!this.toggleCartSubject.getValue());
    };

    addToCart = (cart: Cart) => {
        let current = this.cartListSubject.getValue();
        let duplicate = current.find(c => c.product.id === cart.product.id);
        if (duplicate) duplicate.quantity += cart.quantity;
        else current.push(cart);
        this.cartListSubject.next(current);
    };

    reloadCart = (cartList) => {
        this.cartListSubject.next(cartList);
    };

    removeCart = index => {
        let current = this.cartListSubject.getValue();
        current.splice(index, 1);
        this.cartListSubject.next(current);
    };

}
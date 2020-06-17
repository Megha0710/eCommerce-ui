import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { DataStorageService } from '../shared/data-storage.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[] = [];
  quantity: number = 1;
  constructor(public dataStorageService: DataStorageService, private cartService:CartService) { }

  @Output() cartUpdated = new EventEmitter<{
    prodId: number,
    prodName: string,
    prodPrice: number
  }>();

  ngOnInit(): void {
  }

  onUpdateCart(event) {
    const id = event.target.getAttribute('id');
    const index = this.products.findIndex(elem => elem.id == id);
    this.cartUpdated.emit({
      prodId: this.products[index].id,
      prodName: this.products[index].name,
      prodPrice: +this.products[index].price
    });

  }

  addToCart = (product) => {
    if(this.quantity) this.cartService.addToCart({product,quantity:this.quantity})
};

}

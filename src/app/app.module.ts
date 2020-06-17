import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './products/product.service';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { FooterComponent } from './footer/footer.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { CartService } from './cart/cart.service';
import { QuantityControlComponent } from './quantity-control/quantity-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ShopComponent,
    CartComponent,
    CartItemComponent,
    DropdownDirective,
    FooterComponent,
    LoadingSpinnerComponent,
    QuantityControlComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProductService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

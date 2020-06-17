import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsResolverService } from './products/product-resolver.service';
import { CartComponent } from './cart/cart.component'


const routes: Routes = [
  {path:'',component:ShopComponent , resolve: [ProductsResolverService]},
  {path:'shop',component:ShopComponent, resolve: [ProductsResolverService] },
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

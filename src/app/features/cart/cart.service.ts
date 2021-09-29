import { Injectable, EventEmitter } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { CartProduct } from 'src/app/data/models/cart.model';
import { Product } from 'src/app/data/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  mark = true;
  cartListChanged = new EventEmitter<CartProduct[]>();
  private cartProducts: CartProduct[] = [];

  constructor(private headerService: HeaderService) { }

  getCartProducts(){
    if(this.cartProducts)
      return this.cartProducts.slice();
    else
      return this.cartProducts;
  }
  addCartProduct(addProduct: Product){
    this.mark = true;
    if(this.cartProducts){
      this.cartProducts.forEach((cartProduct)=>{
        if(cartProduct.id == addProduct.id){
          this.mark = false;
        }
      });
    }
    if(this.mark){
      this.mark=true;
      this.cartProducts.push(addProduct);
      this.cartListChanged.emit(this.cartProducts.slice());
      this.headerService.cartItemCount(this.cartProducts.length);
    }
  }
  removeCartProduct(removeProduct: CartProduct){
    let i;
    for (i = 0; i < this.cartProducts.length; i++) {
      if(this.cartProducts[i].id == removeProduct.id){
        break;
      }
    }
    this.cartProducts.splice(i, 1);
    this.cartListChanged.emit(this.cartProducts.slice());
    this.headerService.cartItemCount(this.cartProducts.length);
  }
}

import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { CartProduct } from 'src/app/data/models/cart.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  items: CartProduct[];
  constructor(private cartService: CartService,
              private headerService: HeaderService) {}

  ngOnInit() {
    this.items = this.cartService.getCartProducts();
    this.cartService.cartListChanged.subscribe((cartProduct: CartProduct[])=>{
      this.items = cartProduct;
      this.headerService.totalCostCount(this.items);
    });
  }
  onRemoveCartProduct(cartProduct: CartProduct){
    this.cartService.removeCartProduct(cartProduct);
    this.cartService.cartListChanged.subscribe((cartProduct: CartProduct[])=>{
      this.items = cartProduct;
    });
  }
}

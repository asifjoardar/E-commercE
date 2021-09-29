import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartProduct } from 'src/app/data/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  totalCost = 0;

  category = new Subject;
  dataService = new Subject;
  itemCount = new Subject;
  costCount = new Subject;
  constructor() { }

  onClickHeaderIcon(position: string){
    this.dataService.next(position);
  }
  cartItemCount(counter: number){
    this.itemCount.next(counter);
  }
  totalCostCount(cartProductList: CartProduct[]){
    this.totalCost = 0;
    cartProductList.forEach((cartProduct)=>{
      this.totalCost += cartProduct.price;
    });
    this.costCount.next(this.totalCost);
  }
  getCategory(categoryName: string){
    this.category.next(categoryName);
  }
}

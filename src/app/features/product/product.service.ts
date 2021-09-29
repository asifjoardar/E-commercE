import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartProduct } from 'src/app/data/models/cart.model';
import { Product } from '../../data/models/product.model'
import { CartService } from '../cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product = new Subject;

  dummyProducts: Product[];

  private products: Product[] = [
    new Product(
      'baby-care',
      '1',
      'A Test product 1', 
      'test description 1', 
      'https://dcassetcdn.com/design_img/10150/1674/1674_291293_10150_image.jpg',
      100,
      'abc'
    ),
    new Product(
      'pet-care',
      '2',
      'A Test product 2', 
      'test description 2', 
      'https://dcassetcdn.com/design_img/10150/1674/1674_291293_10150_image.jpg',
      200,
      'def'
    ),
    new Product(
      'food',
      '3',
      'A Test product 3', 
      'test description 3', 
      'https://dcassetcdn.com/design_img/10150/1674/1674_291293_10150_image.jpg',
      100,
      'ghi'
    ),
    new Product(
      'home-and-cleaning',
      '4',
      'A Test product 4', 
      'test description 4', 
      'https://dcassetcdn.com/design_img/10150/1674/1674_291293_10150_image.jpg',
      200,
      'jkl'
    )
  ];

  constructor(private cartService: CartService) { }

  getProducts(data: string){
    this.dummyProducts = this.products.slice();
    this.dummyProducts = this.dummyProducts.filter(function(item: Product){
      return item.category == data;
    });
    return this.dummyProducts;
  }
  getProduct(index: number){
      return this.products[index];
  }
  addProductToCart(product: Product){
    this.cartService.addCartProduct(product);
  }
  productDetail(product: Product){
    this.product.next(product);
  }
}
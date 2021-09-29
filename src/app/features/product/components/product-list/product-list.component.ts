import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HeaderService } from 'src/app/core/services/header.service';
import { CartProduct } from 'src/app/data/models/cart.model';
import { Product } from 'src/app/data/models/product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  category: string;

  constructor(private productService: ProductService,
              private headerService: HeaderService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.category = params['category'];
    //   this.products = this.productService.getProducts(this.category);
    // });
    this.route.params.subscribe((params: Params)=>{
      this.category = params['name'];
      this.products = this.productService.getProducts(this.category);
    });
  }
  onClickAddToCart(product: Product){
    this.productService.addProductToCart(product);
  }
  onDetail(product: Product){
    this.router.navigate([product.id], {relativeTo: this.route});
  }
}

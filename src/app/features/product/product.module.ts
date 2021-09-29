import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent
      }
    ]),
    RouterModule.forChild([
      {
        path: ':id',
        component: ProductComponent
      }
    ]),
    CommonModule,
    SharedModule
  ]
})
export class ProductModule { }

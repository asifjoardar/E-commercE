import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { OffersComponent } from './features/offers/offers.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { ProductComponent } from './features/product/components/product/product.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/offers/offers.module').then(m => m.OffersModule)
  },
  // {
  //   path: '', component: OffersComponent,
  // },
  {
    path: 'category/:name',
    loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule)
  },
  // {
  //   path: 'category/:name', component: ProductListComponent,
  // },
  {
    path: 'category/:name/:id',
    loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule)
  },
  // {
  //   path: 'category/:name/:id', component: ProductComponent,
  // },
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

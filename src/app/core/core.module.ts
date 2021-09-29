import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CartModule } from '../features/cart/cart.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CartModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent
  ]
})
export class CoreModule { }

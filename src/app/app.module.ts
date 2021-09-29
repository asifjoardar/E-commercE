import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './features/auth/auth.module';
import { CartModule } from './features/cart/cart.module';
import { ProductModule } from './features/product/product.module';
import { OffersComponent } from './features/offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule,
    DataModule,
    SharedModule,
    AuthModule,
    CartModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

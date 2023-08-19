import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ContentsListComponent } from './contents-list/contents-list.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { MainIntroComponent } from './main-intro/main-intro.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CartComponent } from './user/cart/cart.component';
import { GoodsCardComponent } from './goods-list/goods-card/goods-card.component';
import { FooterMapComponent } from './footer-map/footer-map.component';
import { OrdersComponent } from './user/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ContentsListComponent,
    GoodsListComponent,
    MainIntroComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    GoodsCardComponent,
    FooterMapComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

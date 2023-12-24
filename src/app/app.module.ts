import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
import { GoodDetailComponent } from './goods-list/good-detail/good-detail.component';
import { ContentViewComponent } from './contents-list/content-view/content-view.component';
import { ContentWriteComponent } from './contents-list/content-write/content-write.component';
import { ContentBoxComponent } from './contents-list/content-box/content-box.component';
import { ReplyViewComponent } from './contents-list/content-view/reply-view/reply-view.component';
import { GoodInfoComponent } from './goods-list/good-detail/good-info/good-info.component';
import { AttchViewComponent } from './contents-list/content-view/attch-view/attch-view.component';

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
    OrdersComponent,
    GoodDetailComponent,
    ContentViewComponent,
    ContentWriteComponent,
    ContentBoxComponent,
    ReplyViewComponent,
    GoodInfoComponent,
    AttchViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

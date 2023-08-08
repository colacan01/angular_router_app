import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ContentsListComponent } from './contents-list/contents-list.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { MainIntroComponent } from './main-intro/main-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ContentsListComponent,
    GoodsListComponent,
    MainIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

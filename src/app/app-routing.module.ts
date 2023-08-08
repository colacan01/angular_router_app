import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainIntroComponent } from './main-intro/main-intro.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { ContentsListComponent } from './contents-list/contents-list.component';

const routes: Routes = [
  {path: '',                component: MainIntroComponent },
  {path: 'goods_list/:id',  component: GoodsListComponent },
  {path: 'contents_list',   component: ContentsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

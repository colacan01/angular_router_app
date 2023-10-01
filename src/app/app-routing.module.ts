import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainIntroComponent }       from './main-intro/main-intro.component';
import { GoodsListComponent }       from './goods-list/goods-list.component';
import { GoodDetailComponent }      from './goods-list/good-detail/good-detail.component';
import { ContentsListComponent }    from './contents-list/contents-list.component';
import { ContentViewComponent }     from './contents-list/content-view/content-view.component';
import { UserComponent }            from './user/user.component';
import { LoginComponent }           from './user/login/login.component';
import { RegisterComponent }        from './user/register/register.component';
import { CartComponent }            from './user/cart/cart.component';

const routes: Routes = [
  {path: '',                component: MainIntroComponent },
  {path: 'goods_list/:id',  component: GoodsListComponent },
  {path: 'good_detail/:id', component: GoodDetailComponent },
  {path: 'contents_list',   component: ContentsListComponent },                         /** 게시판 ID를 파라매터로 넘겨줘야 함 */
  {path: 'content_view',    component: ContentViewComponent },
  {path: 'register',        component: RegisterComponent },
  {path: 'user',            component: UserComponent,
   children: [
    { path: 'login',          component: LoginComponent },    
    { path: 'cart/:user_id',  component: CartComponent },                                 /** 사용자 ID를 파라매터로 넘겨줘야 함 */
   ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainIntroComponent }       from './main-intro/main-intro.component';
import { GoodsListComponent }       from './goods-list/goods-list.component';
import { ContentsListComponent }    from './contents-list/contents-list.component';
import { UserComponent }            from './user/user.component';
import { LoginComponent }           from './user/login/login.component';
import { RegisterComponent }        from './user/register/register.component';
import { CartComponent }            from './user/cart/cart.component';

const routes: Routes = [
  {path: '',                component: MainIntroComponent },
  {path: 'goods_list/:id',  component: GoodsListComponent },
  {path: 'contents_list',   component: ContentsListComponent },                         /** 게시판 ID를 파라매터로 넘겨줘야 함 */
  {path: 'user',            component: UserComponent,
   children: [
    { path: 'login',        component: LoginComponent },
    { path: 'register',     component: RegisterComponent },
    { path: 'cart',         component: CartComponent },                                 /** 사용자 ID를 파라매터로 넘겨줘야 함 */
   ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

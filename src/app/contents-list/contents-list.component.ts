import { Component } from '@angular/core';
import { Article }                            from '../common_interface';
import { GoodsServiceService }                from '../goods-service.service';

@Component({
  selector: 'app-contents-list',
  templateUrl: './contents-list.component.html',
  styleUrls: ['./contents-list.component.css']
})
export class ContentsListComponent {
  Articles: Article[] = [];

  constructor(
    private goodsService: GoodsServiceService
    ) 
    { 
      // this.board_id = '';

      /** 아래 코드를 넣어야 같은 화면에서 리프레쉬 됨 */
      // this.route.params.subscribe(
      //   params => {
      //     this.board_id   = String(params['board_id']);
      //     this.Orders    = this.goodsService.getOrdersAll(this.board_id);          
      //     console.log('values: ', this.board_id);        
      //   }
      // );

      this.Articles = this.goodsService.getArticleAll();
    }
  
}

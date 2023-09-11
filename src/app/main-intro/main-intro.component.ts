import { Component } from '@angular/core';
import { ActivatedRoute }                       from '@angular/router';
import { GoodsServiceService }                  from '../goods-service.service';
import { Category, Good }                       from '../common_interface';
import { GoodsCardComponent }                   from '../goods-list/goods-card/goods-card.component';

@Component({
  selector: 'app-main-intro',
  templateUrl: './main-intro.component.html',
  styleUrls: ['./main-intro.component.css']
})
export class MainIntroComponent {
  categoryId: string;  
  category?:  Category;
  Goods:      Good[] = [];   /** 상품 리스트 변수 */
  
  constructor(
    private route: ActivatedRoute,
    private goodsService: GoodsServiceService
    ) 
    { 
      this.categoryId = '';

      /** 아래 코드를 넣어야 같은 화면에서 리프레쉬 됨 */
      this.route.params.subscribe(
        params => {
          this.Goods        = this.goodsService.getGoodsAll();          
          this.category     = this.goodsService.getCategory(this.categoryId);
          console.log('values: ', this.categoryId);        
        }
      );
    }
}

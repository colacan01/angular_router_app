import { Component, inject, OnInit  }           from '@angular/core';
import { ActivatedRoute }                       from '@angular/router';
import { GoodsServiceService }                  from '../goods-service.service';
import { Good }                                 from '../common_interface';
import { GoodsCardComponent }                   from './goods-card/goods-card.component';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})

export class GoodsListComponent implements OnInit {
  
  categoryId: string;  
  Goods:      Good[] = [];   /** 상품 리스트 변수 */

  // goodsService: GoodsServiceService = inject(GoodsServiceService);
  
  constructor(
    private route: ActivatedRoute,
    private goodsService: GoodsServiceService
    ) 
    { 
      this.categoryId = '';

      /** 아래 코드를 넣어야 같은 화면에서 리프레쉬 됨 */
      this.route.params.subscribe(
        params => {
          this.categoryId = String(params['id']);
          this.Goods = this.goodsService.getGoodsByCategory(this.categoryId);

          console.log('values: ', this.categoryId);        
        }
      );
    }

  ngOnInit() {}  
}

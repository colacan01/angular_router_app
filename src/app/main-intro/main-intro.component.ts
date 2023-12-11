import { Component } from '@angular/core';
import { ActivatedRoute }                       from '@angular/router';
import { Category, Good, Article } from '../interface_category';
import { HttpDataServiceService } from '../http-data-service.service';

@Component({
  selector: 'app-main-intro',
  templateUrl: './main-intro.component.html',
  styleUrls: ['./main-intro.component.css']
})
export class MainIntroComponent {
  categoryId: string;  
  category?:  Category;
  Goods:      Good[] = [];   /** 상품 리스트 변수 */
  PopGoods:   Good[] = [];   /** 상품 리스트 변수 */
  NewsArticle:Article[] =[];

  constructor(
    private route: ActivatedRoute,
    private httpDataService: HttpDataServiceService
    ) 
    { 
      this.categoryId = '';

      /** 아래 코드를 넣어야 같은 화면에서 리프레쉬 됨 */
      this.route.params.subscribe(
        params => {

          this.httpDataService.getGoodsNewProd().subscribe(a => this.Goods = a);          
          this.httpDataService.getGoodPop().subscribe(a => this.PopGoods = a);
          this.httpDataService.getNewsArticles().subscribe(a => this.NewsArticle = a);

          console.log('values: ', this.categoryId);        
        }
      );
    }

}

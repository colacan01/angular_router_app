import { Component, inject, OnInit  }           from '@angular/core';
import { ActivatedRoute }                       from '@angular/router';
import { Category, Good }                       from '../interface_category';
import { HttpDataServiceService }               from '../http-data-service.service';


@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})

export class GoodsListComponent implements OnInit {
  
  categoryId:     string;  
  subcategory?:   Category;
  Goods:          Good[] = [];   /** 상품 리스트 변수 */

  constructor(
    private route: ActivatedRoute,
    private httpDataService: HttpDataServiceService
    ) 
    { 
      this.categoryId = '';

      /** 아래 코드를 넣어야 같은 화면에서 리프레쉬 됨 */
      this.route.params.subscribe(
        params => {
          this.categoryId   = String(params['id']);
          this.httpDataService.getGoodsByCategory(this.categoryId).subscribe(a => this.Goods = a);          
          this.httpDataService.geCategory(this.categoryId).subscribe(a => this.subcategory = a);
          console.log('values: ', this.categoryId);        
        }
      );
    }

  ngOnInit() {}  
}

import { Component, inject, OnInit  }           from '@angular/core';
import { ActivatedRoute }                       from '@angular/router';
import { Category, Good, Goods_Path }           from '../interface_category';
import { HttpDataServiceService }               from '../http-data-service.service';
import { Location }                             from '@angular/common';
import { NaviService }                          from '../navi.service';


@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})

export class GoodsListComponent implements OnInit {
  
  categoryId    : string | undefined;
  subcategory?  : Category;
  Goods         : Good[] = [];   /** 상품 리스트 변수 */
  good_path?    : Goods_Path;

  backURL       : string = '';

  constructor(
    private route                 : ActivatedRoute,
    private httpDataService       : HttpDataServiceService,
    private location              : Location,
    private naviService           : NaviService
    ) 
    { 
      this.route.params.subscribe(
        params => {
          this.categoryId   = String(params['id']);
          this.httpDataService.getGoodsByCategory(this.categoryId).subscribe(a => this.Goods = a);          
          this.httpDataService.geCategory(this.categoryId).subscribe(a => this.subcategory = a);
          this.httpDataService.getGoodsPath('Category', this.categoryId).subscribe(a => this.good_path = a);
          
          this.naviService.setBackUrl(this.location.path());
        }
      );
    }

  ngOnInit() {}  
}

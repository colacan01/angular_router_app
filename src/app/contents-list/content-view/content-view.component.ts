// import { Component, OnInit }                  from '@angular/core';
// import { ActivatedRoute }                     from '@angular/router';
// import { Article }                            from '../../common_interface';
// import { GoodsServiceService }                from '../../goods-service.service';

import { Component } from '@angular/core';
import { ActivatedRoute }                       from '@angular/router';
import { Article }                            from '../../interface_category';
import { HttpDataServiceService }               from '../../http-data-service.service';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent {
  board_id: string;
  article_id: string;
  article?: Article;


  constructor(
    private route: ActivatedRoute,
    // private goodsService: GoodsServiceService
    private httpDataService: HttpDataServiceService
    ) 
    { 
      this.board_id = '';
      this.article_id = '';

      /** 아래 코드를 넣어야 같은 화면에서 리프레쉬 됨 */
      this.route.params.subscribe(
        params => {
          this.board_id    = String(params['board']);
          // this.article_id  = Number(params['id']);
          this.article_id  = String(params['artice_id']);
          // this.article     = this.goodsService.getArticleByBoardArticle(this.board_id, this.article_id);          
          this.httpDataService.getArticle(this.article_id).subscribe( a => this.article = a);     
          console.log('values: ', this.article_id);        
        }
      );
    }

  ngOnInit() {}    
}

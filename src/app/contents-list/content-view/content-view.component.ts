import { Component, OnInit }                  from '@angular/core';
import { ActivatedRoute }                     from '@angular/router';
import { Article }                            from '../../common_interface';
import { GoodsServiceService }                from '../../goods-service.service';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent {
  board_id: string;
  article_id: number;
  article?: Article;


  constructor(
    private route: ActivatedRoute,
    private goodsService: GoodsServiceService
    ) 
    { 
      this.board_id = '';
      this.article_id = 0;

      /** 아래 코드를 넣어야 같은 화면에서 리프레쉬 됨 */
      this.route.params.subscribe(
        params => {
          this.board_id    = String(params['board']);
          this.article_id  = Number(params['id']);
          this.article     = this.goodsService.getArticleByBoardArticle(this.board_id, this.article_id);          
          console.log('values: ', this.article_id);        
        }
      );
    }

  ngOnInit() {}    
}

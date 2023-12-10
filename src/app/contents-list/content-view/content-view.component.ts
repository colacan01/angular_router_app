import { Component }                            from '@angular/core';
import { ActivatedRoute }                       from '@angular/router';
import { Article }                              from '../../interface_category';
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
  lead_article?: Article;
  lag_article?: Article;

  constructor(
    private route: ActivatedRoute,
    private httpDataService: HttpDataServiceService
    ) 
    { 
      this.board_id = '';
      this.article_id = '';

      /** 아래 코드를 넣어야 같은 화면에서 리프레쉬 됨 */
      this.route.params.subscribe(
        params => {
          // this.article_id  = Number(params['id']);
          // this.article     = this.goodsService.getArticleByBoardArticle(this.board_id, this.article_id);          
          
          this.board_id    = String(params['board_id']);          
          this.article_id  = String(params['artice_id']);
          
          console.log('content-view board_id: ', this.board_id);
          console.log('content-view article_id: ', this.article_id);

          this.httpDataService.getArticle(this.article_id).subscribe( a => this.article = a);     
          this.httpDataService.getLeadArticle(this.board_id, this.article_id).subscribe( a => this.lead_article = a);     
          this.httpDataService.getLagArticle(this.board_id, this.article_id).subscribe( a => this.lag_article = a);     

          //TODO: 조회수 업데이트 API 호출
        }
      );
    }

  ngOnInit() {}    
}

import { Component }                            from '@angular/core';
import { ActivatedRoute, Route, Router }        from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Article, Reply }                              from '../../interface_category';
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
  user_id: string = '';
  postReturnValue?: string;

  reply_form = this.formB.group({  
    reply_id: 'temp',  
    article_id: '',  
    reply_user_id: 'dev',
    reply_body: ['', Validators.required],
    reply_write_datetime: null,
    reply_update_datetime: null,
    use_yn: '1',
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpDataService: HttpDataServiceService,
    private formB: FormBuilder
    ) 
    { 
      this.board_id = '';
      this.article_id = '';
      this.user_id = 'dev';

      /** 아래 코드를 넣어야 같은 화면에서 리프레쉬 됨 */
      this.route.params.subscribe(
        params => {
          // this.article_id  = Number(params['id']);
          // this.article     = this.goodsService.getArticleByBoardArticle(this.board_id, this.article_id);          
          
          this.board_id    = String(params['board_id']);          
          this.article_id  = String(params['artice_id']);
          
          console.log('content-view board_id: ', this.board_id);
          console.log('content-view article_id: ', this.article_id);

          this.httpDataService.postReadCount(this.article_id, this.user_id).subscribe();

          this.httpDataService.getArticle(this.article_id).subscribe( a => this.article = a);     
          this.httpDataService.getLeadArticle(this.board_id, this.article_id).subscribe( a => this.lead_article = a);     
          this.httpDataService.getLagArticle(this.board_id, this.article_id).subscribe( a => this.lag_article = a);     
          
          //TODO: 조회수 업데이트 API 호출
        }
      );
    }

  ngOnInit() {}    

  onSubmit() {
    console.log(this.article_id);
    console.log('board_id: ', this.board_id);
    console.log('article_id: ', this.article_id);
    
    this.reply_form.controls.article_id.setValue(this.article_id);
    
    this.httpDataService.postReply(this.reply_form.value as Reply).subscribe(
      r => {
        console.log('refresh url: ', 'contents_view/' + this.board_id + '/' + this.article_id);
        this.router.navigate(['contents_view/' + this.board_id + '/' + this.article_id]);

        this.article?.replies?.push({
                                      reply_body: r.reply_body,
                                      reply_id: r.reply_id,
                                      article_id: r.article_id,
                                      reply_user_id: r.reply_user_id,
                                      use_yn: r.use_yn,
                                      reply_write_datetime: r.reply_write_datetime,
                                      reply_update_datetime: r.reply_update_datetime
                                    });
      });
  }
}

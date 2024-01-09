import { Component }                            from '@angular/core';
import { ActivatedRoute, Route, Router }        from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Article, Reply }                       from '../../interface_category';
import { HttpDataServiceService }               from '../../http-data-service.service';
import { Location }                             from '@angular/common';
import { NaviService }                          from '../../navi.service';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent {
  board_id:         string;
  article_id:       string;
  page_size:        string | any;
  page_index:       number | any;
  article?:         Article;
  lead_article?:    Article;
  lag_article?:     Article;
  user_id:          string = '';

  backURL:      string = '';
  
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
    private router                : Router,
    private route                 : ActivatedRoute,
    private httpDataService       : HttpDataServiceService,
    private formB                 : FormBuilder,
    private location              : Location,
    private naviService           : NaviService
    ) 
    { 
      this.board_id = '';
      this.article_id = '';
      this.user_id = 'dev';

      /** 아래 코드를 넣어야 같은 화면에서 리프레쉬 됨 */
      this.route.queryParams.subscribe(
        parameters => {
          this.board_id    = String(parameters['board_id']);          
          this.article_id  = String(parameters['article_id']);
          this.page_size   = String(parameters['page_size']);
          this.page_index  = String(parameters['page_index']);

          if(this.page_size == 'undefined') {
            this.page_size = '10';
          }

          if(this.page_index == 'undefined') {
            this.page_index = '1';
          }
          
          this.httpDataService.postReadCount(this.article_id, this.user_id).subscribe();

          this.httpDataService.getArticle(this.article_id).subscribe( a => this.article = a);     
          this.httpDataService.getLeadArticle(this.board_id, this.article_id).subscribe( a => this.lead_article = a);     
          this.httpDataService.getLagArticle(this.board_id, this.article_id).subscribe( a => this.lag_article = a);               
          
          this.naviService.setBackUrl(this.location.path());
        }
      );
    }

  onSubmit() {
    //기본키 셋팅
    this.reply_form.controls.article_id.setValue(this.article_id);
    
    this.httpDataService.postReply(this.reply_form.value as Reply).subscribe(
      resp => {
        this.article?.replies?.push(resp);        
        this.reply_form.controls.reply_body.reset();
        }
      );
  }

  onCancel(): void {
    const queryParams = { 
      board_id:   this.board_id, 
      page_size:  this.page_size,
      page_index: this.page_index
    };

    this.router.navigate(['contents_list'], { queryParams: queryParams });   
  }

}

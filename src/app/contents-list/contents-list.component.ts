import { Component }                          from '@angular/core';
import { ActivatedRoute }                     from '@angular/router';
import { Article }                            from '../interface_category';
import { HttpDataServiceService }             from '../http-data-service.service';
import { Location }                           from '@angular/common';
import { NaviService }                        from '../navi.service';

@Component({
  selector      : 'app-contents-list',
  templateUrl   : './contents-list.component.html',
  styleUrls     : ['./contents-list.component.css']
})
export class ContentsListComponent {
  articles      : Article[] = [];
  board_id      : string | undefined;
  board_nm      : string | undefined;
  board_page!   : number;

  page_size     : string | undefined;
  page_index    : string | undefined;

  backURL       : string = '';

  constructor(
    private route                 : ActivatedRoute,
    private httpDataService       : HttpDataServiceService,
    private location              : Location,
    private naviService           : NaviService
    ) 
    { 
      this.route.queryParams.subscribe(
        parameters => {
          this.board_id   = String(parameters['board_id']);
          this.page_size  = String(parameters['page_size']);
          this.page_index = String(parameters['page_index']);
          
          if(this.page_size == 'undefined') {
            this.page_size = '10';
          }

          if(this.page_index == 'undefined') {
            this.page_index = '1';
          }

          /** 화면의 네비게이션 표시용 */
          this.httpDataService.getBoardPages(this.board_id, 10)
                              .subscribe( a => this.board_page  = a);  
          this.httpDataService.getArticles(this.board_id, this.page_size, this.page_index)
                              .subscribe( a => this.articles = a);
          this.httpDataService.getBoardName(this.board_id)
                              .subscribe( a => {
                                this.board_nm = a.category_nm;
                              });
          
          this.naviService.setBackUrl(this.location.path());
        }
      );
    }

    counter(i: number ) {
      return new Array(i);
    }
}

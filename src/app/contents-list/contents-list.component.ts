import { Component } from '@angular/core';
import { ActivatedRoute }                       from '@angular/router';
import { Article }                            from '../interface_category';
// import { GoodsServiceService }                from '../goods-service.service';
import { HttpDataServiceService }               from '../http-data-service.service';

@Component({
  selector: 'app-contents-list',
  templateUrl: './contents-list.component.html',
  styleUrls: ['./contents-list.component.css']
})
export class ContentsListComponent {
  Articles: Article[] = [];
  board_id: string;

  constructor(
    // private goodsService: GoodsServiceService
    private route: ActivatedRoute,
    private httpDataService: HttpDataServiceService
    ) 
    { 
      this.board_id = '';

      /** 아래 코드를 넣어야 같은 화면에서 리프레쉬 됨 */
      this.route.params.subscribe(
        params => {
          this.board_id   = String(params['board_id']);
          this.httpDataService.getArticles(this.board_id).subscribe( a => this.Articles = a);          
          console.log('values: ', this.board_id);        
        }
      );
    }
  
}

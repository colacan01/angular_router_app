import { Component } from '@angular/core';
import { ActivatedRoute }                       from '@angular/router';
import { Article }                            from '../interface_category';
import { HttpDataServiceService }               from '../http-data-service.service';

@Component({
  selector: 'app-contents-list',
  templateUrl: './contents-list.component.html',
  styleUrls: ['./contents-list.component.css']
})
export class ContentsListComponent {
  articles: Article[] = [];
  board_id: string;

  constructor(
    private route: ActivatedRoute,
    private httpDataService: HttpDataServiceService
    ) 
    { 
      this.board_id = '';

      this.route.params.subscribe(
        params => {
          this.board_id   = String(params['board_id']);
          this.httpDataService.getArticles(this.board_id).subscribe( a => this.articles = a);          
          console.log('values: ', this.board_id);        
        }
      );
    }
  
}

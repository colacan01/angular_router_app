import { Component }                            from '@angular/core';
import { ActivatedRoute }                       from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Article, Category }                    from '../../interface_category';
import { HttpDataServiceService }               from '../../http-data-service.service';

@Component({
  selector: 'app-content-write',
  templateUrl: './content-write.component.html',
  styleUrls: ['./content-write.component.css']
})
export class ContentWriteComponent {
  Boards: Category[] = [];
  article?: Article;

  write_form = this.formB.group({  
    article_id: 'temp',  
    board_id: ['', Validators.required],
    user_id: 'dev',
    article_subject: ['', Validators.required],
    article_body: ['', Validators.required],
    article_read_count: null,
    article_write_datetime: null,
    article_recommend_count: null,
    article_update_datetime: null,
  });
  
  constructor(
    private route: ActivatedRoute,
    private httpDataService: HttpDataServiceService,
    private formB: FormBuilder
  ) {
    this.route.params.subscribe(
      params => {
        this.httpDataService.getBoards().subscribe( a => this.Boards = a );                  
      }
    );
  }

  onSubmit(): void {
    console.log('write_from: ',           this.write_form.value);
    // console.log('form_board_id: ',        this.write_form.get('form_board_id')?.value);
    // console.log('form_article_subject: ', this.write_form.get('form_article_subject')?.value);
    // console.log('form_article_body: ',    this.write_form.get('form_article_body')?.value);

    //TODO: post방식으로 전달하기
    this.httpDataService.postArticle(this.write_form.value as Article).subscribe( a => {
      console.log('posting 처리 후');
      console.log('리턴값 확인', a);
      
      });
  }
}

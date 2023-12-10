import { Component }                            from '@angular/core';
import { ActivatedRoute, Route, Router }                from '@angular/router';
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
    private router: Router,
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
    // console.log('write_from: ',           this.write_form.value);
    // console.log('board_id: ',        this.write_form.get('board_id')?.value);
    // console.log('article_subject: ', this.write_form.get('article_subject')?.value);
    // console.log('article_body: ',    this.write_form.get('article_body')?.value);

    //TODO: rest api에서 리턴하는 http 응답코드 체크해서 정상/오류 처리
    this.httpDataService.postArticle(this.write_form.value as Article).subscribe( a => {
      this.router.navigate(['contents_list/' +  String(this.write_form.get('board_id')?.value)]);   
      });
  }
}

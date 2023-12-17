import { Component, OnInit }                            from '@angular/core';
import { ActivatedRoute, Route, Router }        from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Article, Category }                    from '../../interface_category';
import { HttpDataServiceService }               from '../../http-data-service.service';

@Component({
  selector: 'app-content-write',
  templateUrl: './content-write.component.html',
  styleUrls: ['./content-write.component.css']
})
export class ContentWriteComponent implements OnInit {
  Boards: Category[] = [];
  article?: Article;

  board!: string;
  page_size!: string;
  page_index!: string;

  write_form = this.formB.group({  
    article_id: 'temp',  
    board_id: ['', Validators.required],
    user_id: 'dev',
    article_subject: ['', Validators.required],
    article_body: ['', Validators.required]
  });
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpDataService: HttpDataServiceService,
    private formB: FormBuilder
  ) {
    this.route.queryParams.subscribe(
      parameters => {
        this.board   = String(parameters['board_id']);
        this.page_size  = String(parameters['page_size']);
        this.page_index = String(parameters['page_index']);

        this.httpDataService.getBoards().subscribe( a => this.Boards = a );
      }
    );
  }

  ngOnInit() {
    this.write_form.patchValue({
      board_id: this.board
    });
  }
  
  onSubmit(): void {
    console.log('write_from: ',      this.write_form.value);
    console.log('board_id: ',        this.write_form.get('board_id')?.value);
    console.log('article_subject: ', this.write_form.get('article_subject')?.value);
    console.log('article_body: ',    this.write_form.get('article_body')?.value);

    //TODO: rest api에서 리턴하는 http 응답코드 체크해서 정상/오류 처리
    this.httpDataService.postArticle(this.write_form.value as Article).subscribe( a => {
      this.router.navigate(['contents_list?board_id=' +  String(this.write_form.get('board_id')?.value) 
                                                      + '&page_size=' + this.page_size 
                                                      + '&page_index=' + this.page_index]);   
      });
  }
}

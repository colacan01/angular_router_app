import { Component, OnInit }                            from '@angular/core';
import { ActivatedRoute, Route, Router }        from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Article, Category }                    from '../../interface_category';
import { HttpDataServiceService }               from '../../http-data-service.service';

declare var startEditor:any;

@Component({
  selector: 'app-content-write',
  templateUrl: './content-write.component.html',
  styleUrls: ['./content-write.component.css']
})
export class ContentWriteComponent implements OnInit {
  Boards:       Category[] = [];
  article?:     Article;
  board!:       string;
  page_size!:   string;

  write_form = this.formB.group({  
    article_id:       'temp',  
    board_id:         ['', Validators.required],
    user_id:          'dev',
    article_subject:  ['', Validators.required],
    article_body:     ['', Validators.required]
  });
  
  constructor(
    private router:             Router,
    private route:              ActivatedRoute,
    private httpDataService:    HttpDataServiceService,
    private formB:              FormBuilder
  ) {
    this.route.queryParams.subscribe(
      parameters => {
        this.board      = String(parameters['board_id']);
        this.page_size  = String(parameters['page_size']);

        this.httpDataService.getBoards().subscribe( a => this.Boards = a );
      }
    );
  }

  ngOnInit() {
    //select 박스 기본값: 게시판 경로
    this.write_form.patchValue({
      board_id: this.board
    });

    startEditor();
  }
  
  onSubmit(): void {
    // console.log('write_from: ',      this.write_form.value);
    // console.log('board_id: ',        this.write_form.get('board_id')?.value);
    // console.log('article_subject: ', this.write_form.get('article_subject')?.value);
    // console.log('article_body: ',    this.write_form.get('article_body')?.value);

    //TODO: rest api에서 리턴하는 http 응답코드 체크해서 정상/오류 처리
    this.httpDataService.postArticle(this.write_form.value as Article).subscribe( a => {
      const data = { 
        board_id:   String(this.write_form.get('board_id')?.value), 
        page_size:  this.page_size,
        page_index: '1'
      };
 
      this.router.navigate(['contents_list'], { queryParams: data });   
      });
  }
}

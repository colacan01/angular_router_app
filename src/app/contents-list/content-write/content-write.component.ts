import { Component, OnInit }                            from '@angular/core';
import { ActivatedRoute, Route, Router }                from '@angular/router';
import { FormBuilder, Validators }                      from '@angular/forms';
import { Article, Article_Attach_File, Category }       from '../../interface_category';
import { HttpDataServiceService }                       from '../../http-data-service.service';
import { HttpHeaders, HttpParams }                      from '@angular/common/http';

declare var startEditor:any;

@Component({
  selector: 'app-content-write',
  templateUrl: './content-write.component.html',
  styleUrls: ['./content-write.component.css']
})
export class ContentWriteComponent implements OnInit {
  Boards:           Category[] = [];
  article:          Article | any;
  board!:           string;
  page_size!:       string;
  page_index!:      string;
  _article_body!:   string;
  write_form = this.formB.group({  
    article_id:       'temp',  
    board_id:         ['', Validators.required],
    user_id:          'dev',
    article_subject:  ['', Validators.required],
    article_body:     ['']
  });

  //첨부파일 처리
  attach_files:     Article_Attach_File[] = [];
  _attach_files:    any;

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
        this.page_index = String(parameters['page_index']);

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
    // console.log('board_id: ',        this.write_form.get('board_id')?.value);
    // console.log('article_subject: ', this.write_form.get('article_subject')?.value);
    // console.log('article_body: ',    (<HTMLInputElement>document.getElementById("article_content")).value);
    // console.log('write_from: ',      this.write_form.value);
    
    this._article_body = (<HTMLInputElement>document.getElementById("article_content")).value;
    this.write_form.controls.article_body.setValue(this._article_body);

    //첨부파일 리스트 처리
    const formData = new FormData();
    this._attach_files = (<NodeList>document.getElementsByName('article_attach_file'));
    console.log('업로드용 파일 인식: ', this._attach_files);

    for (let file of this._attach_files) {
      console.log('for loop 내부에서: ', file);
      if(file.files.length > 0) {
        formData.append("att_files", <File>file.files[0], file.files[0].name);
        console.log('파일명: ', file.files[0].name);
        console.log('formData: ', formData);
      }
    }
    
    //TODO: rest api에서 리턴하는 http 응답코드 체크해서 정상/오류 처리
    // this.httpDataService.postArticle(this.write_form.value as Article).subscribe( a => this.article = a );
    
    // console.log('board_id: ', String(this.article.board_id));
    // console.log('article_id: ', String(this.article.article_id));

    // if(this._attach_files.length > 0) {
    //   this.httpDataService.uploadFile(String(this.article.board_id), String(this.article.article_id), formData ).subscribe( f => this.attach_files = f);
    // }

    // const q_data = { 
    //   // board_id:   String(this.write_form.get('board_id')?.value), 
    //   board_id:   String(this.article.board_id),
    //   page_size:  this.page_size,
    //   page_index: '1'
    // };

    // this.router.navigate(['contents_list'], { queryParams: q_data });   
    this.httpDataService.postArticle(this.write_form.value as Article).subscribe( a => {
      console.log('board_id: ', String(a.board_id));
      console.log('article_id: ', String(a.article_id));

      if(this._attach_files.length > 0) {
        this.httpDataService.uploadFile(String(a.board_id), String(a.article_id), formData ).subscribe( f => this.attach_files = f);
      }

      const q_data = { 
        board_id:   String(a.board_id),
        page_size:  this.page_size,
        page_index: '1'
      };

      this.router.navigate(['contents_list'], { queryParams: q_data });     
    });
  }

  onCancel(): void {
    const q_data = { 
      board_id:   this.board, 
      page_size:  this.page_size,
      page_index: this.page_index
    };

    this.router.navigate(['contents_list'], { queryParams: q_data });   
  }
}


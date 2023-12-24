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
  article_body!:    string;
  write_form = this.formB.group({  
    article_id:       'temp',  
    board_id:         ['', Validators.required],
    user_id:          'dev',
    article_subject:  ['', Validators.required],
    article_body:     ['']
  });

  attach_files:    any;

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
    
    this.article_body = (<HTMLInputElement>document.getElementById("article_content")).value;
    this.write_form.controls.article_body.setValue(this.article_body);

    var formData = new FormData();    
    this.attach_files = document.getElementsByName('article_attach_file');
    
    // for (let file of this.attach_files.files) {
    for (let file of this.attach_files) {
      if (file.files.length != 0) {
        formData.append("att_files", file.files[0], file.files[0].name);        
      }
    }

    this.httpDataService.postArticle(this.write_form.value as Article).subscribe( a => {
      if(this.attach_files.length > 0) {
        this.httpDataService.uploadFile(String(a.board_id), String(a.article_id), formData ).subscribe();
      }

      const queryParams = { 
        board_id:   String(a.board_id),
        page_size:  this.page_size,
        page_index: '1'
      };

      this.router.navigate(['contents_list'], { queryParams: queryParams });     
    });
  }

  onCancel(): void {
    const queryParams = { 
      board_id:   this.board, 
      page_size:  this.page_size,
      page_index: this.page_index
    };

    this.router.navigate(['contents_list'], { queryParams: queryParams });   
  }
}


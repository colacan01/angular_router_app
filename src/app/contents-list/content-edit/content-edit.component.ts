import { Component, OnInit }                            from '@angular/core';
import { ActivatedRoute, Route, Router }                from '@angular/router';
import { FormBuilder, Validators }                      from '@angular/forms';
import { Article, Category }                            from '../../interface_category';
import { HttpDataServiceService }                       from '../../http-data-service.service';

declare var startEditor: any;

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.css']
})
export class ContentEditComponent implements OnInit {
  Boards          : Category[]  | any ;
  board_id        : string      | any;
  page_index      : string      | any;
  page_size       : string      | any;
  article_id      : string      | any;
  article         : Article     | undefined;
  article_body    : string      | any;
  attach_files    : any;

  edit_form = this.formB.group({  
    article_id:       [''],  
    board_id:         ['', Validators.required],
    user_id:          'dev',
    article_subject:  ['', Validators.required],
    article_body:     ['']
  });

  constructor(
    private router:             Router,
    private route:              ActivatedRoute,
    private httpDataService:    HttpDataServiceService,
    private formB:              FormBuilder
  ) {
    this.route.queryParams.subscribe(
      parameters => {
        this.board_id   = String(parameters['board_id']);
        this.page_size  = String(parameters['page_size']);
        this.page_index = String(parameters['page_index']);
        this.article_id = String(parameters['article_id']);

        this.httpDataService.getBoards().subscribe( a => this.Boards = a );
        this.httpDataService.getArticle(this.article_id).subscribe( a => {
          this.edit_form.patchValue({
            article_id        : a.article_id,
            board_id          : a.board_id,
            user_id           : a.user_id,
            article_subject   : a.article_subject,
            article_body      : a.article_body
          });
          
          this.article = a;

          document.querySelector('.trumbowyg-editor')?.insertAdjacentHTML("beforeend", a.article_body);          
        }); 
      }
    );
  }

  ngOnInit() {
    startEditor();
  }

  onSubmit(): void {
    this.article_body = (<HTMLInputElement>document.getElementById("article_content")).value;
    this.edit_form.controls.article_body.setValue(this.article_body);

    // console.log(this.edit_form.controls.article_id.value);
    // console.log(this.edit_form.controls.board_id.value);
    // console.log(this.edit_form.controls.user_id.value);
    // console.log(this.edit_form.controls.article_subject.value);
    // console.log(this.edit_form.controls.article_body.value);

    var formData = new FormData();    
    this.attach_files = document.getElementsByName('article_attach_file');
    
    for (let file of this.attach_files) {
      if (file.files.length != 0) {
        formData.append("att_files", file.files[0], file.files[0].name);        
      }
    }

    this.httpDataService.putArticle(this.edit_form.value as Article).subscribe( a => {
      if(this.attach_files.length > 0) {
        this.httpDataService.uploadFile(String(a.board_id), String(a.article_id), formData ).subscribe();
      }

      const queryParams = { 
        board_id    : String(a.board_id),
        article_id  : this.article_id,      
        page_size   : this.page_size,
        page_index  : this.page_index,
      };

      console.log("queryParams: ", queryParams);

      this.router.navigate(['content_view'], { queryParams: queryParams });     
    });
  }

  onCancel(): void {
    const queryParams = { 
      board_id    : this.board_id, 
      page_size   : this.page_size,
      page_index  : this.page_index,
      
    };

    this.router.navigate(['contents_list'], { queryParams: queryParams });   
  }
}

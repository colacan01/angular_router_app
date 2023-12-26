import { Component, Input, Output, EventEmitter }           from '@angular/core';
import { Article_Attach_File }        from 'src/app/interface_category';
import { HttpDataServiceService }     from 'src/app/http-data-service.service';


@Component({
  selector: 'app-attch-edit',
  templateUrl: './attch-edit.component.html',
  styleUrls: ['./attch-edit.component.css']
})
export class AttchEditComponent {
  @Input()  attach_files            : Article_Attach_File[] | any;
  @Output() deleted_attach_file     = new EventEmitter<Article_Attach_File>();

  constructor(
    private httpDataService:    HttpDataServiceService
  ) {}

  deleteAttach(attach_file: Article_Attach_File): void {
    this.httpDataService.delAttFile(attach_file).subscribe();
  }
}

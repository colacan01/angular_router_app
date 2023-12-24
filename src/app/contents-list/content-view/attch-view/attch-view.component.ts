import { Component, Input } from '@angular/core';
import { Article_Attach_File } from 'src/app/interface_category';

@Component({
  selector: 'app-attch-view',
  templateUrl: './attch-view.component.html',
  styleUrls: ['./attch-view.component.css']
})
export class AttchViewComponent {
  @Input() attach_files: Article_Attach_File[] | any;
}

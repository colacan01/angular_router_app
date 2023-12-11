import { Component, Input } from '@angular/core';
import { Article, Reply }                                 from '../../../interface_category';

@Component({
  selector: 'app-reply-view',
  templateUrl: './reply-view.component.html',
  styleUrls: ['./reply-view.component.css']
})
export class ReplyViewComponent {
  @Input() reply!: Reply;
}

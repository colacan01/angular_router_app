import { Component, Input } from '@angular/core';
import { Article }                                 from '../../interface_category';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class ContentBoxComponent {
  @Input() article!: Article;
}

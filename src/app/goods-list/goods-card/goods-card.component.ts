import { Component, Input } from '@angular/core';
// import { Good }                                 from '../../common_interface';
import { Good }                                 from '../../interface_category';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.css'],
})
export class GoodsCardComponent {
  @Input() good!: Good;
}

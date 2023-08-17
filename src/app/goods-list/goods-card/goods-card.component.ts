import { Component, Input } from '@angular/core';
import { Good }                                 from '../../common_interface';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.css'],
})
export class GoodsCardComponent {
  @Input() good!: Good;
}

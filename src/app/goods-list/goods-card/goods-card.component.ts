import { Component, Input, OnInit  } from '@angular/core';
// import { Good }                                 from '../../common_interface';
import { Good }                                 from '../../interface_category';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.css'],
})
export class GoodsCardComponent {
  @Input() good!: Good;

  // hasPrice: number = 0;
  // _Base_Price?: number | undefined;
  // _Sale_Price?: number | undefined;
  // _Discount_Per?: number | undefined;

  // ngOnInit() {
  //   if (this.good.price_histories?.length != 0) {
  //     this.hasPrice = 1
  //     this._Base_Price = this.good.price_histories[0].base_price;
  //     this._Sale_Price = this.good.price_histories[0].sale_price;
  //     this._Discount_Per = this.good.price_histories[0].discount_per;
  //   }

  // }  
}

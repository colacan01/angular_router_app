import { Component, OnInit }                  from '@angular/core';
import { ActivatedRoute }                     from '@angular/router';
import { Order }                              from '../../common_interface';
import { GoodsServiceService }                from '../../goods-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  User_Id: string;  
  Orders: Order[] = [];

  constructor(
    private route: ActivatedRoute,
    private goodsService: GoodsServiceService
    ) 
    { 
      this.User_Id = '';

      /** 아래 코드를 넣어야 같은 화면에서 리프레쉬 됨 */
      this.route.params.subscribe(
        params => {
          this.User_Id   = String(params['user_id']);
          this.Orders    = this.goodsService.getOrdersAll(this.User_Id);          
          console.log('values: ', this.User_Id);        
        }
      );
      // this.route.queryParams.subscribe(
      //   params => {
      //     this.User_Id   = String(params['user_id']);
      //     this.Orders    = this.goodsService.getOrdersAll(this.User_Id);          
      //     console.log('values: ', this.User_Id);        
      //   }
      // );
    }

    ngOnInit() {}      
}

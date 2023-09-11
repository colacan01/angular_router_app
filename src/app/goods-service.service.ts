import { Injectable } from '@angular/core';
import { Category, Good } from './common_interface';

@Injectable({
  providedIn: 'root'
})
export class GoodsServiceService {
  Goods: Good[] = [
    {
      category_id: "road",
      id: "1",
      brand: "SCOTT",
      name: "Addict RC 10",
      my: "MY23",
      ori_price: 13600000,
      price: 10300000,
      discount_per: 0.2,
      rep_image: "../../assets/images/road/bike_addict_rc/addict_rc_10.jpg",
      is_new_prod: "신제품"
    },
    {
      category_id: "road",
      id: "2",
      brand: "SCOTT",
      name: "Addict RC 15",
      my: "MY23",
      price: 9000000,
      rep_image: "../../assets/images/road/bike_addict_rc/addict_rc_15.jpg"
    },
    {
      category_id: "road",
      id: "3",
      brand: "SCOTT",
      name: "Addict RC 20",
      my: "MY23",
      price: 7800000,
      rep_image: "../../assets/images/road/bike_addict_rc/addict_rc_20.jpg",
      is_in_stock: "입고"
    },
    {
      category_id: "road",
      id: "4",
      brand: "SCOTT",
      name: "Addict RC 30",
      my: "MY22",
      price: 6950000,
      rep_image: "../../assets/images/road/bike_addict_rc/addict_rc_30.jpg"
    },
    {
      category_id: "road",
      id: "5",
      brand: "SCOTT",
      name: "Addict RC 40",
      my: "MY23",
      price: 6350000,
      rep_image: "../../assets/images/road/bike_addict_rc/addict_rc_40.jpg",
      is_sold_out: "품절"
    },
    {
      category_id: "road",
      id: "6",
      brand: "Elfama",
      name: "Fantasia Radar 9",
      my: "MY23",
      price: 5280000,
      discount_per: 0.05,
      rep_image: "../../assets/images/road/elfama/elfama_rador_9.jpg",
      is_new_prod: "신제품",
      is_sale_discount: "할인"
    },
    {
      category_id: "road",
      id: "7",
      brand: "Elfama",
      name: "Fantasia Radar 8",
      my: "MY23",
      price: 4280000,
      discount_per: 0.05,
      rep_image: "../../assets/images/road/elfama/elfama_rador_8.jpg",
      is_new_prod: "신제품",
      is_sale_discount: "할인"
    },
    {
      category_id: "mtb",
      id: "1",
      brand: "SCOTT",
      name: "SCALE RC SL",
      my: "MY23",
      price: 21700000,
      rep_image: "../../assets/images/mtb/scott/SCALE_RC_SL.jpg",
      is_new_prod: "신제품"
    },
    {
      category_id: "mtb",
      id: "2",
      brand: "SCOTT",
      name: "SCALE RC WORLD CUP EVO",
      my: "MY23",
      discount_per: 0.2,
      ori_price: 15000000,
      price: 12000000,
      rep_image: "../../assets/images/mtb/scott/SCALE_RC_WORLD_CUP_EVO.jpg",
      is_sale_discount: "할인"
    },
    {
      category_id: "mtb",
      id: "3",
      brand: "SCOTT",
      name: "SCALE RC WORLD CUP",
      my: "MY23",
      discount_per: 0.2,
      ori_price: 11500000,
      price: 9200000,
      rep_image: "../../assets/images/mtb/scott/SCALE_RC_WORLD_CUP.jpg",
      is_sale_discount: "할인"
    },
    {
      category_id: "mtb",
      id: "4",
      brand: "SCOTT",
      name: "SCALE RC TEAM ISSUE",
      my: "MY23",
      discount_per: 0.2,
      ori_price: 6800000,
      price: 5440000,
      rep_image: "../../assets/images/mtb/scott/SCALE_RC_TEAM_ISSUE.jpg",
      is_sale_discount: "할인"
    },
    {
      category_id: "mtb",
      id: "5",
      brand: "SCOTT",
      name: "SCALE RC TEAM",
      my: "MY23",
      price: 4850000,
      rep_image: "../../assets/images/mtb/scott/SCALE_RC_TEAM.jpg",
      is_new_prod: "신제품"
    },
    {
      category_id: "hyb",
      id: "1",
      brand: "SCOTT",
      name: "Sub Cross 10",
      price: 900000,
      rep_image: "../../assets/images/flower01.jpg"
    },
    {
      category_id: "hyb",
      id: "2",
      brand: "SCOTT",
      name: "Sub Cross 20",
      price: 600000,
      rep_image: "../../assets/images/flower02.jpg"
    },
    {
      category_id: "kid",
      id: "1",
      brand: "SCOTT",
      name: "ROXTER 16",
      price: 900000,
      rep_image: "../../assets/images/flower01.jpg"
    },
    {
      category_id: "kid",
      id: "2",
      brand: "SCOTT",
      name: "ROXTER WALKER",
      price: 600000,
      rep_image: "../../assets/images/flower02.jpg"
    },
    {
      category_id: "kid",
      id: "3",
      brand: "SCOTT",
      name: "Scale 24 DISK",
      price: 900000,
      rep_image: "../../assets/images/flower01.jpg"
    },
    {
      category_id: "kid",
      id: "4",
      brand: "SCOTT",
      name: "Scale 24",
      price: 600000,
      rep_image: "../../assets/images/flower02.jpg"
    },
  ];

  Categories: Category[] = [
    {
      id: "road",
      name: "로드",
      banner_img: "../../assets/images/banner_road.jpg"
    },
    {
      id: "mtb",
      name: "엠티비",
      banner_img: "../../assets/images/banner_mtb.jpg"
    },
    {
      id: "hyb",
      name: "하이브리드",
      banner_img: "../../assets/images/banner_hyb.jpg"
    },
    {
      id: "kid",
      name: "아동",
      banner_img: "../../assets/images/banner_kid.jpg"
    }
  ]
  constructor() { }

  getCategory(category_id: string): Category | undefined {
    return this.Categories.find( a => a.id === category_id);
  }

  getCategoryAll(): Category[] | undefined {
    return this.Categories;
  }

  getGoodsByCategory(category_id: string): Good[] {
    return this.Goods.filter( a => a.category_id === category_id);
  }

  getGoodByCategoryGood(category_id: string, good_id: string): Good | undefined {
    return this.Goods.find( a => a.category_id === category_id && a.id === good_id);
  }

  getGoodsAll(): Good[] {
    return this.Goods;
  }
}

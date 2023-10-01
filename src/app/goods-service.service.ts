import { Injectable } from '@angular/core';
import { Category, SubCategory, Good, Order } from './common_interface';

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
    {
      category_id: "compute",
      id: "compute_4",
      brand: "Bryton",
      name: "Rider S800",
      price: 540000,
      rep_image: "../../assets/images/accessory/bryton_s800.jpg"
    },
    {
      category_id: "compute",
      id: "compute_5",
      brand: "Bryton",
      name: "Rider S500",
      price: 400000,
      rep_image: "../../assets/images/accessory/bryton_s500.jpg"
    },
    {
      category_id: "acc_etc",
      id: "acc_etc_1",
      brand: "Giyo",
      name: "GP-2530",
      price: 38000,
      rep_image: "../../assets/images/accessory/giyo_pump_2530.jpg"
    },
    {
      category_id: "tire",
      id: "tire_1",
      brand: "Continental",
      name: "Grand Prix 5000 Clincher",
      price: 87000,
      rep_image: "../../assets/images/accessory/continental_5000_cl.jpg"
    },
    {
      category_id: "tire",
      id: "tire_2",
      brand: "Continental",
      name: "Grand Prix 5000 S TR",
      price: 120000,
      rep_image: "../../assets/images/accessory/continental_5000s_tr.jpg",
      is_new_prod: "신제품"
    },
    {
      category_id: "grip",
      id: "grip_1",
      brand: "Ciclovation",
      name: "레더터치 메탈릭 캔디 애플 레드",
      price: 50000,
      rep_image: "../../assets/images/accessory/CICLOVATION_red.jpg",
      is_in_stock: "입고"
    },
    {
      category_id: "grip",
      id: "grip_2",
      brand: "Ciclovation",
      name: "레더터치 메탈릭 에머시스트 퍼프",
      price: 50000,
      rep_image: "../../assets/images/accessory/CICLOVATION_purple.jpg",
      is_in_stock: "입고"
    },
    {
      category_id: "drive",
      id: "drive_1",
      brand: "Shimano",
      name: "FC-R9200-P 파워미터 크랭크 (12단)",
      price: 1938000,
      rep_image: "../../assets/images/parts/1629957460139m0.jpg"
    },
    {
      category_id: "drive",
      id: "drive_2",
      brand: "Shimano",
      name: "CS-M5100 (11단, 11-48)",
      price: 100000,
      rep_image: "../../assets/images/parts/158891540078m0.jpg",
      is_in_stock: "입고"
    },
  ];

  SubCategories: SubCategory[] = [
    {
      id: "road",
      name: "로드",
      banner_img: "../../assets/images/banner_road.jpg",
      target_url: "goods_list"
    },
    {
      id: "mtb",
      name: "MTB",
      banner_img: "../../assets/images/banner_road.jpg",
      target_url: "goods_list"
    },
    {
      id: "hyb",
      name: "하이브리드",
      banner_img: "../../assets/images/banner_hyb.jpg",
      target_url: "goods_list"
    },
    {
      id: "kid",
      name: "아동",
      banner_img: "../../assets/images/banner_hyb.jpg",
      target_url: "goods_list"
    },
    {
      id: "drive",
      name: "구동계",
      banner_img: "../../assets/images/950_DA_R9200.jpg",
      target_url: "goods_list"
    },
    {
      id: "brake",
      name: "브레이크",
      banner_img: "../../assets/images/xtr_group_set.jpg",
      target_url: "goods_list"
    },
    {
      id: "stier",
      name: "조향부",
      target_url: "goods_list"
    },
    {
      id: "part_etc",
      name: "기타",
      banner_img: "../../assets/images/950_grx_2023.jpg",
      target_url: "goods_list"
    },
    {
      id: "tire",
      name: "타이어",
      target_url: "goods_list"
    },
    {
      id: "grip",
      name: "그립/바테입",
      target_url: "goods_list"
    },
    {
      id: "compute",
      name: "속도계",
      target_url: "goods_list"
    },
    {
      id: "acc_etc",
      name: "기타",
      target_url: "goods_list"
    }
  ];

  Categories: Category[] = [
    {
      c_group: "goods",
      id: "1",
      name: "자전거",
      clss: "dropdown",
      subcategories: [
        {
          id: "road",
          name: "로드",
          target_url: "goods_list",
          banner_img: "../../assets/images/banner_road.jpg"
        },
        {
          id: "mtb",
          name: "MTB",
          target_url: "goods_list",
          banner_img: "../../assets/images/banner_road.jpg"
        },
        {
          id: "hyb",
          name: "하이브리드",
          target_url: "goods_list",
          banner_img: "../../assets/images/banner_hyb.jpg"
        },
        {
          id: "kid",
          name: "아동",
          target_url: "goods_list",
          banner_img: "../../assets/images/banner_hyb.jpg"
        }
      ]
    },
    {
      c_group: "goods",
      id: "2",
      name: "부품",
      clss: "dropdown",
      subcategories: [
        {
          id: "drive",
          name: "구동계",
          target_url: "goods_list"
        },
        {
          id: "brake",
          name: "브레이크",
          target_url: "goods_list"
        },
        {
          id: "stier",
          name: "조향부",
          target_url: "goods_list"
        },
        {
          id: "part_etc",
          name: "기타",
          target_url: "goods_list"
        }
      ]
    },
    {
      c_group: "goods",
      id: "3",
      name: "용품",
      clss: "dropdown",
      subcategories: [
        {
          id: "tire",
          name: "타이어",
          target_url: "goods_list"
        },
        {
          id: "grip",
          name: "그립/바테입",
          target_url: "goods_list"
        },
        {
          id: "compute",
          name: "속도계",
          target_url: "goods_list"
        },
        {
          id: "acc_etc",
          name: "기타",
          target_url: "goods_list"
        }
      ]
    },
    {
      c_group: "goods",
      id: "20",
      name: "게시판",
      target_url: "/contents_list"
    },
    {
      c_group: "users",
      id: "31",
      name: "사용자 등록",
      target_url: "/register_user"
    },
    {
      c_group: "users",
      id: "30",
      name: "사용자",
      clss: "dropdown",
      subcategories: [
        {
          id: "login",
          name: "로그인",
          icon_clss: "bi-box-arrow-in-right",
          target_url: "user"
        },
        // {
        //   id: "register",
        //   name: "사용자등록",
        //   icon_clss: "bi-person-plus",
        //   target_url: "user"
        // },
        {
          id: "cart",
          name: "장바구니",
          icon_clss: "bi-cart4",
          target_url: "user"
        },
      ]
    },
  ];

  Orders: Order[] = [
    {
      user_id: "colacan",
      order_no: "2023081700001",
      item_seq: 1,
      good_id: "1",
      rep_image: "../../../assets/images/ICSHG5010136.jpg",
      name: "[ICSHG5010136] CS-HG50-10 (10단) [10단,11-36T]",
      order_qty: 1,
      order_amount: 44500,
      pay_method: "카드",   
      deli_stat: "배송완료"
    },
    {
      user_id: "colacan",
      order_no: "2023081700002",
      item_seq: 1,
      good_id: "1",
      rep_image: "../../../assets/images/ICNHG54116I.jpg",
      name: "[ICNHG54116I] CN-HG54 (10단,116링크) [CN-HG54]",
      order_qty: 1,
      order_amount: 28700,
      pay_method: "카드",   
      deli_stat: "배송완료"
    },
    {
      user_id: "colacan",
      order_no: "2023081700002",
      item_seq: 2,
      good_id: "1",
      rep_image: "../../../assets/images/ICSHG5010136.jpg",
      name: "[ICSHG5010136] CS-HG50-10 (10단) [10단,11-36T]",
      order_qty: 2,
      order_amount: 89000,
      pay_method: "카드",   
      deli_stat: "배송완료"
    },
    {
      user_id: "peach",
      order_no: "2023081700001",
      item_seq: 1,
      good_id: "1",
      rep_image: "../../../assets/images/ICSHG5010136.jpg",
      name: "[ICSHG5010136] CS-HG50-10 (10단) [10단,11-36T]",
      order_qty: 1,
      order_amount: 44500,
      pay_method: "카드",   
      deli_stat: "배송완료"
    },
    {
      user_id: "peach",
      order_no: "2023081700002",
      item_seq: 1,
      good_id: "1",
      rep_image: "../../../assets/images/ICNHG54116I.jpg",
      name: "[ICNHG54116I] CN-HG54 (10단,116링크) [CN-HG54]",
      order_qty: 1,
      order_amount: 28700,
      pay_method: "카드",   
      deli_stat: "배송완료"
    },
  ];

  constructor() { }

  getSubCategory(category_id: string): Category | undefined {
    return this.SubCategories.find( a => a.id === category_id);
  }

  // getSubCategory(id: string): SubCategory | undefined {
  //   // return this.Categories.find( a => a.subcategories?.find(b => b.id === id));
  //   return this.Categories.
  // }

  getSubCategoryAll(): Category[] | undefined {
    return this.SubCategories;
  }

  getGoodsByCategory(category_id: string): Good[] {
    return this.Goods.filter( a => a.category_id === category_id);
  }

  getGoodsNewProd(): Good[] {
    return this.Goods.filter( a => a.is_new_prod === "신제품");
  }

  getGoodsPop(): Good[] {
    return this.Goods.filter( a => a.is_sale_discount === "할인");
  }

  getGoodByCategoryGood(category_id: string, good_id: string): Good | undefined {
    return this.Goods.find( a => a.category_id === category_id && a.id === good_id);
  }

  getGoodsAll(): Good[] {
    return this.Goods;
  }

  getGood(good_id: string): Good | undefined {
    return this.Goods.find(a => a.id === good_id);
  }

  getOrdersAll(user_id: string): Order[] {
    return this.Orders.filter(a => a.user_id === user_id);
  }
}

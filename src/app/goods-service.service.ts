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
      name: "스캇 포일 RC 10",
      price: 1000000,
      rep_image: "../../assets/images/flower01.jpg"
    },
    {
      category_id: "road",
      id: "2",
      name: "스캇 포일 RC 20",
      price: 900000,
      rep_image: "../../assets/images/flower02.jpg"
    },
    {
      category_id: "road",
      id: "3",
      name: "스캇 포일 RC 30",
      price: 600000,
      rep_image: "../../assets/images/flower03.jpg"
    },
    {
      category_id: "road",
      id: "4",
      name: "스캇 에딕트 RC 10",
      price: 1002000,
      rep_image: "../../assets/images/flower04.jpg"
    },
    {
      category_id: "road",
      id: "5",
      name: "스캇 에딕트 RC 20",
      price: 905000,
      rep_image: "../../assets/images/flower05.jpg"
    },
    {
      category_id: "road",
      id: "6",
      name: "스캇 에딕트 RC 30",
      price: 690000,
      rep_image: "../../assets/images/flower06.jpg"
    },
    {
      category_id: "mtb",
      id: "1",
      name: "스캇 스케일 RC 10",
      price: 1000000,
      rep_image: "../../assets/images/flower07.jpg"
    },
    {
      category_id: "mtb",
      id: "2",
      name: "스캇 스케일 RC 20",
      price: 900000,
      rep_image: "../../assets/images/flower01.jpg"
    },
    {
      category_id: "mtb",
      id: "3",
      name: "스캇 스케일 RC 30",
      price: 600000,
      rep_image: "../../assets/images/flower02.jpg"
    },
    {
      category_id: "hyb",
      id: "1",
      name: "스캇 서브크로스 10",
      price: 900000,
      rep_image: "../../assets/images/flower01.jpg"
    },
    {
      category_id: "hyb",
      id: "2",
      name: "스캇 서브크로스 20",
      price: 600000,
      rep_image: "../../assets/images/flower02.jpg"
    },
    {
      category_id: "kid",
      id: "1",
      name: "스캇 ROXTER 16",
      price: 900000,
      rep_image: "../../assets/images/flower01.jpg"
    },
    {
      category_id: "kid",
      id: "2",
      name: "스캇 ROXTER WALKER",
      price: 600000,
      rep_image: "../../assets/images/flower02.jpg"
    },
    {
      category_id: "kid",
      id: "3",
      name: "스캇 SCALE 24 DISK",
      price: 900000,
      rep_image: "../../assets/images/flower01.jpg"
    },
    {
      category_id: "kid",
      id: "4",
      name: "스캇 SCALE 24",
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

  getGoodsByCategory(category_id: string): Good[] {
    return this.Goods.filter( a => a.category_id === category_id);
  }

  getGoodByCategoryGood(category_id: string, good_id: string): Good | undefined {
    return this.Goods.find( a => a.category_id === category_id && a.id === good_id);
  }
}

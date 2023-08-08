import { Injectable } from '@angular/core';
import { Good } from './common_interface';

@Injectable({
  providedIn: 'root'
})
export class GoodsServiceService {
  Goods: Good[] = [
    {
      category_id: "road",
      id: "1",
      name: "스캇 포일 RC 10",
      price: 1000000
    },
    {
      category_id: "road",
      id: "2",
      name: "스캇 포일 RC 20",
      price: 900000
    },
    {
      category_id: "road",
      id: "3",
      name: "스캇 포일 RC 30",
      price: 600000
    },
    {
      category_id: "road",
      id: "4",
      name: "스캇 에딕트 RC 10",
      price: 1002000
    },
    {
      category_id: "road",
      id: "5",
      name: "스캇 에딕트 RC 20",
      price: 905000
    },
    {
      category_id: "road",
      id: "6",
      name: "스캇 에딕트 RC 30",
      price: 690000
    },
    {
      category_id: "mtb",
      id: "1",
      name: "스캇 스케일 RC 10",
      price: 1000000
    },
    {
      category_id: "mtb",
      id: "2",
      name: "스캇 스케일 RC 20",
      price: 900000
    },
    {
      category_id: "mtb",
      id: "3",
      name: "스캇 스케일 RC 30",
      price: 600000
    },
  ];

  constructor() { }

  getGoodsByCategory(category_id: string): Good[] {
    return this.Goods.filter( a => a.category_id === category_id);
  }

  getGoodByCategoryGood(category_id: string, good_id: string): Good | undefined {
    return this.Goods.find( a => a.category_id === category_id && a.id === good_id);
  }
}

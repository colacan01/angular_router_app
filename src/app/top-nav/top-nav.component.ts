import { Component } from '@angular/core';
import {Category} from '../common_interface';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  categories: Category[] = [
    {
      id: "1",
      name: "자전거",
      clss: "dropdown",
      subcategories: [
        {
          id: "road",
          name: "로드",
          target_url: "goods_list"
        },
        {
          id: "mtb",
          name: "MTB",
          target_url: "goods_list"
        },
        {
          id: "hyb",
          name: "하이브리드",
          target_url: "goods_list"
        },
        {
          id: "kid",
          name: "아동",
          target_url: "goods_list"
        }
      ]
    },
    {
      id: "2",
      name: "게시판",
      target_url: "/contents_list"
    },
    {
      id: "3",
      name: "사용자",
      clss: "dropdown",
      subcategories: [
        {
          id: "1",
          name: "로그인",
          icon_clss: "bi-box-arrow-in-right"
        },
        {
          id: "2",
          name: "사용자등록",
          icon_clss: "bi-person-plus"
        },
        {
          id: "3",
          name: "장바구니",
          icon_clss: "bi-cart4"
        },
      ]
    },
  ];

}

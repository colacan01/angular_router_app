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
}

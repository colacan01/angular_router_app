import { Injectable } from '@angular/core';
import { Category, SubCategory, Good, Order, Article } from './common_interface';

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
      name_ko: "애딕트 RC 10",
      my: "MY23",
      ori_price: 13600000,
      price: 10300000,
      discount_per: 0.2,
      rep_image: "../../assets/images/road/bike_addict_rc/addict_rc_10.jpg",
      message: "가볍고 빠르고 매력적인 디자인을 갖춘 에딕트 RC 10은 당신이 꿈꿔왔던 모든 경쟁적 우위를 제공합니다. 완전히 통합된 케이블과 레이스에 바로 출전할 수 있는 사양을 갖춘 이 자전거는 산 정상을 향해 질주하거나 지역의 크리테리움 경기에서 우승을 하는 데 도움을 줄 것입니다.",
      features: "에딕트 RC 디스크 HMX 카본 프레임;에딕트 RC HMX 포크;SRAM 포스 AXS eTap 24단 구동계;싱크로스 캐피탈 1.0 35 디스크 휠;슈발베 ONE 레이스-가드 타이어;싱크로스 카본/알로이 파츠",
      size: "XXS(47);XS(49);S(52);M(54);L(56);XL(58)",
      specs: "FRAME|Addict RC Disc HMX / Road Race geometry / Replaceable Derailleur Hanger / Internal cable routing;FORK|Addict RC HMX Flatmount Disc / 1 1/4\"-1 1/2\" Eccentric Carbon steerer;REAR DERAILLEUR|SRAM FORCE eTap AXS / 24 Speed Electronic Shift System;FRONT DERAILLEUR|SRAM FORCE eTap AXS Electronic Shift System;SHIFTERS|SRAM FORCE eTap AXS HRD Shift-Brake System;CRANKSET|SRAM FORCE Power meter Crankset /48/35 T;BB-SET|SRAM DUB PF ROAD 86.5;CHAIN|SRAM FORCE;CASSETTE|SRAM FORCE XG1270 / 10-33;",
      is_new_prod: "신제품"
    },
    {
      category_id: "road",
      id: "2",
      brand: "SCOTT",
      name: "Addict RC 15",
      name_ko: "애딕트 RC 15",
      my: "MY23",
      price: 9000000,
      rep_image: "../../assets/images/road/bike_addict_rc/addict_rc_15.jpg",
      message: "가볍고 빠르고 매력적인 디자인을 갖춘 에딕트 RC 15는 당신이 꿈꿔왔던 모든 경쟁적 우위를 제공합니다. 완전히 통합된 케이블과 레이스에 바로 출전할 수 있는 사양을 갖춘 이 자전거는 산 정상을 향해 질주하거나 지역의 크리테리움 경기에서 우승을 하는 데 도움을 줄 것입니다.",
      features: "에딕트 RC 디스크 HMX 카본 프레임;에딕트 RC HMX 포크;시마노 울테그라 Di2 디스크 24단 구동계;싱크로스 캐피탈 1.0 35 디스크 휠;슈발베 ONE 레이스-가드 타이어;싱크로스 카본/알로이 파츠",
      size: "XS(49);S(52);M(54);L(56)",
      specs: "FRAME|Addict RC Disc HMX / Road Race geometry / Replaceable Derailleur Hanger / Internal cable routing;FORK|Addict RC HMX Flatmount Disc / 1 1/4\"-1 1/2\" Eccentric Carbon steerer;REAR DERAILLEUR|Shimano Ultegra Di2 RD-R8150-SS / 24 Speed Electronic Shift System;FRONT DERAILLEUR|Shimano Ultegra Di2 FD-R8150 / Electronic Shift System;SHIFTERS|Shimano Ultegra ST-R8170 / 24 Speed Electronic Shift System;CRANKSET|Shimano Ultegra FC-R8100 / Hollowtech II 52x36 T;BB-SET|Shimano SM-BB72-41B;CHAIN|Shimano Ultegra CN-M8100-12;CASSETTE|Shimano Ultegra CS-R8100-12 / 11-30;BRAKES|Shimano BR-R8170 Hyd.Disc;ROTOR|Shimano RT-CL800 rotor 160/F and 160/R;HANDLEBAR|Syncros Creston 1.0 Compact Carbon;H'STEM|Syncros RR 1.5 / 1 1/4\";SEATPOST|Syncros Duncan 1.0 Aero;SEAT|Syncros Belcarra Regular 2.0;HEADSET|Syncros Addict RC Integrated;WHEELSET|Syncros Capital 1.0 35 Disc / 24 Front / 24 Rear / Syncros Axle / Removable Lever with Tool;FRONT TIRE|Schwalbe ONE Race-Guard Fold / 700x28C;REAR TIRE|Schwalbe ONE Race-Guard Fold / 700x28C;APPROX WEIGHTS IN KG|7.6;MAX.SYSTEM WEIGHT|120kg;",
    },
    {
      category_id: "road",
      id: "3",
      brand: "SCOTT",
      name: "Addict RC 20",
      name_ko: "애딕트 RC 20",
      my: "MY23",
      price: 7800000,
      rep_image: "../../assets/images/road/bike_addict_rc/addict_rc_20.jpg",
      message: "가볍고 빠르고 매력적인 디자인을 갖춘 에딕트 RC 20은 당신이 꿈꿔왔던 모든 경쟁적 우위를 제공합니다. 완전히 통합된 케이블과 레이스에 바로 출전할 수 있는 사양을 갖춘 이 자전거는 산 정상을 향해 질주하거나 지역의 크리테리움 경기에서 우승을 하는 데 도움을 줄 것입니다.",
      features: "에딕트 RC 디스크 HMX 카본 프레임;에딕트 RC HMX 포크;SRAM 포스 eTap AXS 디스크 24단 구동계;싱크로스 RP2.0 디스크 휠;슈발베 ONE 레이스-가드 타이어;싱크로스 카본/알로이 파츠",
      size: "XXS(47);XS(49);S(52);M(54);L(56)",
      is_in_stock: "입고"
    },
    {
      category_id: "road",
      id: "4",
      brand: "SCOTT",
      name: "Addict RC 30",
      name_ko: "애딕트 RC 30",
      my: "MY22",
      price: 6950000,
      rep_image: "../../assets/images/road/bike_addict_rc/addict_rc_30.jpg"
    },
    {
      category_id: "road",
      id: "5",
      brand: "SCOTT",
      name: "Addict RC 40",
      name_ko: "애딕트 RC 40",
      my: "MY23",
      price: 6350000,
      rep_image: "../../assets/images/road/bike_addict_rc/addict_rc_40.jpg",
      specs: "FRAME|Addict RC Disc HMX / Road Race geometry / Replaceable Derailleur Hanger / Internal cable routing;FORK|Addict RC HMX Flatmount Disc / 1 1/4\"-1 1/2\" Eccentric Carbon steerer;REAR DERAILLEUR|Shimano 105 Di2 RD-R7150 24 Speed Electronic Shift System;FRONT DERAILLEUR|Shimano 105 Di2 FD-R7150;SHIFTERS|Shimano 105 Di2 ST-R7170 24 Speed Electronic Shift System;CRANKSET|Shimano 105 FC-R7100 Hollowtech II 50x34 T;BB-SET|Shimano BB-RS500-PB;CHAIN|Shimano CN-M6100-12;CASSETTE|Shimano CS-R7100 11-34;BRAKES|Shimano BR-R7170 Hyd.Disc;ROTOR|Shimano SM-RT70 CL rotor 160/F and 160/R;HANDLEBAR|Syncros Creston 2.0 Compact Alloy;H'STEM|Syncros RR 1.5 1 1/4\";SEATPOST|Syncros Duncan 1.0 Aero;SEAT|Syncros Belcarra Regular 2.0;HEADSET|Syncros Addict RC Integrated;WHEELSET|Syncros RP2.0 Disc / 28 Front / 28 Rear / Syncros Axle / Removable Lever with Tool;FRONT TIRE|Schwalbe ONE Race-Guard Fold / 700x28C;REAR TIRE|Schwalbe ONE Race-Guard Fold / 700x28C;APPROX WEIGHTS IN KG|7.9;MAX. SYSTEM WEIGHT|120kg",
      is_sold_out: "품절"
    },
    {
      category_id: "road",
      id: "6",
      brand: "Elfama",
      name: "Fantasia Radar 9",
      name_ko: "판타시아 레이다 9",
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
      name_ko: "판타시아 레이다 8",
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
      name_ko: "스케일 RC SL",
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
      name_ko: "스케일 RC WORLD CUP EVO",
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
      name_ko: "스케일 RC WORLD CUP",
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
      name_ko: "스케일 RC TEAM ISSUE",
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
      name_ko: "스케일 RC TEAM",
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
      name_ko: "서브크로스 10",
      price: 900000,
      rep_image: "../../assets/images/flower01.jpg"
    },
    {
      category_id: "hyb",
      id: "2",
      brand: "SCOTT",
      name: "Sub Cross 20",
      name_ko: "서브크로스 20",
      price: 600000,
      rep_image: "../../assets/images/flower02.jpg"
    },
    {
      category_id: "kid",
      id: "1",
      brand: "SCOTT",
      name: "ROXTER 16",
      name_ko: "록스터 16",
      price: 900000,
      rep_image: "../../assets/images/flower01.jpg"
    },
    {
      category_id: "kid",
      id: "2",
      brand: "SCOTT",
      name: "ROXTER WALKER",
      name_ko: "록스터 워커",
      price: 600000,
      rep_image: "../../assets/images/flower02.jpg"
    },
    {
      category_id: "kid",
      id: "3",
      brand: "SCOTT",
      name: "Scale 24 DISK",
      name_ko: "스케일 24 DISK",
      price: 900000,
      rep_image: "../../assets/images/flower01.jpg"
    },
    {
      category_id: "kid",
      id: "4",
      brand: "SCOTT",
      name: "Scale 24",
      name_ko: "스케일 24",
      price: 600000,
      rep_image: "../../assets/images/flower02.jpg"
    },
    {
      category_id: "compute",
      id: "compute_4",
      brand: "Bryton",
      name: "Rider S800",
      name_ko: "리더 S800",
      price: 540000,
      rep_image: "../../assets/images/accessory/bryton_s800.jpg"
    },
    {
      category_id: "compute",
      id: "compute_5",
      brand: "Bryton",
      name: "Rider S500",
      name_ko: "리더 S500",
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

  Articles: Article[] = [
    {
      board_id: "notice",
      article_id: 1,
      user_id: "colacan",
      article_subject: "자전거 전동 펌프와 저소음 키보드 추천부탁드려요",
      article_body: "안녕하세요" +
      "오랜만에 글을 올리네요" +
      "다름이 아니라 아들이 자기네 회사 펌프레셔에서 자전거 바람을 너무 많이 넣어서 터지는 사고가 있어서" +
      "적정압으로 넣을 수 있는 괜찮은 전동 펌프를 추천부탁드려요." +
      "그리고, 또 아들 얘긴데 요놈이 새벽까지 게임하느라 키보드 소리가 시끄려워서 한마디 했습니다." +
      "생각해보니 저도 이전에 듄2000인가? 새벽까지 했던기억이 있네요. 전략시뮬이였던것 같은데..." +
      "그래서 키보드를 제돈으로 사줄려고 합니다. 소리가 덜나는 것 으로요 10만원 미만으로 부탁드려요" +      
      "추천부탁드려요 감사합니다.", 
      read_count: 1,
      write_date: new Date(2023, 8, 15),
      recommend_count: 0,
      // replies?: Article_Reply[];
    },
    {
      board_id: "notice",
      article_id: 2,
      user_id: "colacan",
      article_subject: "인도 유투버의 아이폰과 갤럭시 드롭 테스트 영상",
      article_body: "영어가 인도어처럼 들리는 마법.." +
      "어차피 자막으로만 봄... ㅋㅋㅋ" , 
      read_count: 1,
      write_date: new Date(2023, 8, 15),
      recommend_count: 0,
      // replies?: Article_Reply[];
    },
    {
      board_id: "notice",
      article_id: 3,
      user_id: "colacan",
      article_subject: "후후후.. 추석 내내 침대생활",
      article_body: "집 밖에 나가서 뭔가 작업을해야지..는 입발린 계획 뿐." +
      "아무것도 안하고 5일이 지나갔습니다." +      
      "퀘스트 3를 사게 되서 구 기종이 되어버린 퀘스트 2 2대를 전부팔지, 일부 남길지 고민을 남기고," +
      "이마에는 뾰루지가 나 버렸고," +
      "관절아픈 증상은 싹 나았으나, 이제 일 다시 시작하면 관절통에 근육통이라는 더블콤보가 기다릴테고.." +
      "몇년 전이라면 금토일 같이 3일 쉬면, 적어도 하루이틀은 이것저것 고친다고 막 작업하고 그랬는데," +
      "요즘엔 4일이 뭔가, 6일 연휴 내내 한번도 작업하고싶지 않다는 생각이 드는 걸 봐서는" +
      "정비 취미를 진짜 접어야하나.. 하는 생각이 듭니다." +      
      "바이크도 1년에 주행거리 3천킬로도 안 넘으니 진짜 생활차 몇대 남기고 접어야 하나.." +
      "아무래도 대 숙청의 시대를 거쳐야 할 듯 합니다." , 
      read_count: 1,
      write_date: new Date(2023, 8, 17),
      recommend_count: 0,
      // replies?: Article_Reply[];
    },
  ]
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

  getArticleAll(): Article[] {
    return this.Articles;
  }

  getArticleByBoardArticle(board_id: string, article_id: number): Article | undefined {
    return this.Articles.find( a => a.board_id === board_id && a.article_id === article_id);
  }
}

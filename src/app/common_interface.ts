export interface Category {
    c_group?: string;
    id: string;
    name: string;
    target_url?: string;
    banner_img?: string;
    clss?: string;                  /* 카테고리 css 클래스 지정: 드롭다운, 일반, 버튼 */
    icon_clss?: string;             /* 아이콘 css 클래스 지정: */
    subcategories?: SubCategory[];
}

export interface SubCategory {
    id: string;
    name: string;
    target_url?: string;
    banner_img?: string;
    icon_clss?: string;             /* 아이콘 css 클래스 지정: */
}

export interface Good {
    category_id: string;
    id: string;
    name: string;
    name_ko?: string;
    brand?: string;
    rep_image?: string;             /** 대표이미지 */
    thumb_images?: string;          /** 목록 썸네일 */
    my?: string;                    /** 년식 */
    ori_price?: number;             /** 원래 가격 */
    price: number;                  /** 판매가격 */
    discount_per?: number;          /** 할인율 */
    meta_info?: string;             /** 검색엔진 키워드 */
    message?: string;               /** 메시지 */
    features?: string;              /** 특징's */
    size?: string;                  /** 사이즈 */
    specs?: string;                 /** 상세사양 */
    is_new_prod?: string;
    is_in_stock?: string;
    is_sale_discount?: string;
    is_sold_out?: string;
}

export interface cart {
    item_seq: number;       /* 1개 주문에 포함된 상품 순번 */
    rep_image: string;
    name: string;
    cart_qty: number;
    cart_amount: number;   
}

export interface Order {
    user_id: string;
    order_no: string;
    item_seq: number;       /* 1개 주문에 포함된 상품 순번 */
    good_id: string;
    rep_image: string;
    name: string;
    order_qty: number;
    order_amount: number;
    pay_method: string;   
    deli_stat: string; 
}

export interface Article {
    board_id: string;
    article_id: number;
    user_id: string;
    article_subject: string;
    article_body: string;
    read_count: number;
    write_date: Date;
    recommend_count: number;
    replies?: Article_Reply[];
}

export interface Article_Reply {
    user_id: string;
    reply_body: string;
    wrtie_date: Date;
}
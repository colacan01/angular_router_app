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
    brand?: string;
    rep_image?: string;
    thumb_images?: string;
    my?: string;
    ori_price?: number;
    price: number;
    discount_per?: number;
    size?: string;
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

export interface Board {
    board_id: string;
    article_id: number;
    user_id: string;
    article_subject: string;
    article_body: string;
    read_count: number;
    wrtie_date: Date;
    recommend_count: number;
}
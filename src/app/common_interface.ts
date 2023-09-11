export interface Category {
    id: string;
    name: string;
    target_url?: string;
    banner_img?: string;
    clss?: string;                  /* 카테고리 css 클래스 지정: 드롭다운, 일반, 버튼 */
    icon_clss?: string;             /* 아이콘 css 클래스 지정: */
    subcategories?: SubCategoty[];
}

export interface SubCategoty {
    id: string;
    name: string;
    target_url?: string;
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
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
    rep_image?: string;
    thumb_images?: string;
    price: number;
    size?: string;
}
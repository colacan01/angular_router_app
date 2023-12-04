export interface Category_Group {
    category_group_id: string;
    site_id: string;
    category_group_nm: string;
    use_yn: string;
    sort_seq: number;
    site?: string;
    categories?: Category[];
}

export interface Category {
    category_id: string;
    parent_category_id: string;
    site_id: string;
    category_group_id: string;
    category_nm: string;
    target_url?: string;
    banner_image_url?: string;
    category_css_class?: string;
    icon_css_class?: string;
    sort_seq: number,
    category_group?: Category_Group;
    parent_category?: Category;
    subcategories?: Category[];    
    goods?: Good[];
}

export interface Supplier {
    supplier_id: string;
    supplier_nm: string;
    biz_no?: string;
    addr1?: string;
    addr2?: string;
    zipno?: string;
    repr_telno?: string;
    contact_nm?: string;
    contact_telno?: string;
    use_yn: number;
    brands?: Brand[];
}

export interface Brand {
    brand_id: string;
    supplier_id: string;
    brand_nm: string;
    brand_logo_url?: string;
    use_yn: number;
    supplier?: Supplier;
    goods?: Good[];
}

export interface Good {
    good_id: string;
    category_id: string;
    good_link_url: string;
    good_nm: string;
    good_nm_ko: string;
    brand_id: string;
    repr_image_url?: string;
    thumb_image_url?: string;
    made_year?: string;
    meta_info?: string;
    message?: string;
    features?: string;
    sizes?: string;
    specs?: string;
    is_new_prod?: string;
    is_in_stock?: string;
    is_sale_discount?: string;
    is_sold_out?: string;
    category?: Category;
    brand?: Brand;
    // price_histories?: price_history[];
}
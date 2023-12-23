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
    price_history?: Price_History;
    base_good_infos: Good_Info[];
    detail_good_infos: Good_Info[];
}

export interface Good_Info {
    good_id: string;
    good_info_type: string;
    good_info_seq: number;
    good_info_subject: string;
    good_info_content: string;
    good_info_css_class: string;
    use_yn: string;
}

export interface Price_History {
    good_id: string;
    price_start_date: Date;
    price_end_date?: Date;
    base_price?: number;
    sale_price?: number;
    discount_per?: number;
    chg_reason?: string;
    good: Good;
}

export interface Goods_Path {
    level_root: string;
    level_1_id?: string;
    level_1_name?: string;
    level_2_id?: string;
    level_2_name?: string;
}

export interface Article {
    article_id?: string;
    article_seq?: number;
    board_id: string;
    user_id: string;
    article_subject: string;
    article_body: string;
    article_read_count?: number;
    article_write_datetime?: Date;
    article_recommend_count?: number;
    article_update_datetime?: Date;
    article_reply_count?: number;
    category?: Category;
    replies?: Reply[];
    user?: User;
    article_attach_files?: Article_Attach_File[];
}

export interface Reply {
    reply_id: string;
    article_id: string;
    reply_user_id: string;
    reply_body: string;
    reply_write_datetime?: Date;
    reply_update_datetime?: Date;
    use_yn: string;
    article?: Article;
}

export interface Article_Action_His {
    article_id: string;
    action_datetime: Date;
    action_type: string;
    action_user_id: string;
    acticle?: Article;
}

export interface Article_Attach_File {
    att_file_id: string;
    article_id: string;
    att_file_seq: number;
    att_file_nm: string;
    att_file_path: string;      //실제경로 + 파일명
    att_file_size?: number;
    acticle?: Article;
}

export interface User {
    user_id: string;
    user_nm: string;
    user_password: string;
    user_email: string;
    user_mobile_no: string;
    acticles?: Article[];
}
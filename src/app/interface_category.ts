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
}

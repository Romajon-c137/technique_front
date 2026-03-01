// Типы для API техники
export interface TechniqueBrand {
    id: number;
    name: string;
    created_at: string;
}

export interface TechniqueTag {
    id: number;
    name: string;
    created_at: string;
}

export interface TechniqueImage {
    id: number;
    image: string;
    is_main: boolean;
}

export interface HintElement {
    id: number;
    element_type: 'video' | 'text' | 'image';
    order: number;
    text_content: string;
    image: string | null;
    video_url: string | null;
    created_at: string;
}

export interface TechniqueHint {
    id: number;
    type: string;
    title: string;
    elements: HintElement[];
}

export interface TechniqueResponsible {
    id: string;
    phone: string;
    full_name: string;
    avatar?: string;
}

export interface TechniqueItem {
    id: number;
    brand: TechniqueBrand;
    model: string;
    tag: TechniqueTag;
    images: TechniqueImage[];
    responsible: TechniqueResponsible;
    hints: TechniqueHint[];
    created_at: string;
    updated_at: string;
}

export interface TechniqueListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: TechniqueItem[];
}

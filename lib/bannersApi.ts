const API_BASE_URL = '/api';

function getAuthToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('akfa_access_token');
}

async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const token = getAuthToken();
    const config: RequestInit = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers,
        },
    };
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, config);
    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }
    return response.json();
}

export interface Banner {
    id: number;
    title: string;
    description: string;
    image: string;
    order: number;
    is_active: boolean;
    created_at: string;
}

export async function getBanners(): Promise<Banner[]> {
    const resp = await fetchAPI<{ results: Banner[] }>('/v1/banners');
    return resp?.results ?? [];
}

export async function getBanner(id: number | string): Promise<Banner> {
    return fetchAPI<Banner>(`/v1/banners/${id}`);
}

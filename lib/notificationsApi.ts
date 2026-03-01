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
            'Accept': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
            ...options.headers,
        },
    };
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, config);
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`API Error ${response.status}: ${text}`);
    }
    if (response.status === 204) return null as T;
    return response.json();
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type NotificationType = 'maintenance_today' | 'maintenance_overdue' | 'manual';
export type ElementType = 'text' | 'image' | 'video';

export interface NotificationElement {
    id: string;
    element_type: ElementType;
    element_type_display: string;
    order: number;
    text_content: string | null;
    image: string | null;      // absolute URL returned by backend
    video_url: string | null;
}

export interface Notification {
    id: string;
    type: NotificationType;
    type_display: string;
    title: string;
    body: string;
    is_read: boolean;
    has_detail: boolean;              // true if elements exist
    related_instance_id: string | null;
    related_equipment_id: number | null;
    created_at: string;
}

export interface NotificationDetail extends Notification {
    elements: NotificationElement[];
}

export interface NotificationsListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Notification[];
}

// ─── API functions ────────────────────────────────────────────────────────────

/** GET /api/v1/notifications — список */
export async function getNotifications(): Promise<NotificationsListResponse> {
    return fetchAPI<NotificationsListResponse>('/v1/notifications');
}

/** GET /api/v1/notifications/{id} — детальное уведомление с elements */
export async function getNotification(id: string): Promise<NotificationDetail> {
    return fetchAPI<NotificationDetail>(`/v1/notifications/${id}`);
}

/** GET /api/v1/notifications/unread_count */
export async function getUnreadCount(): Promise<{ unread_count: number }> {
    return fetchAPI<{ unread_count: number }>('/v1/notifications/unread_count');
}

/** POST /api/v1/notifications/{id}/read */
export async function markAsRead(id: string): Promise<NotificationDetail> {
    return fetchAPI<NotificationDetail>(`/v1/notifications/${id}/read`, { method: 'POST' });
}

/** POST /api/v1/notifications/mark_all_read */
export async function markAllRead(): Promise<{ status: string; marked: number }> {
    return fetchAPI<{ status: string; marked: number }>(
        '/v1/notifications/mark_all_read',
        { method: 'POST' }
    );
}

import type { TechniqueListResponse, TechniqueItem } from '@/types/technique';

const API_BASE_URL = '/api';

/**
 * Получить токен авторизации из localStorage
 */
function getAuthToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('akfa_access_token');
}

/**
 * Базовая функция для выполнения запросов к API
 */
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
        const errorText = await response.text();
        throw new Error(`API Error ${response.status}: ${errorText}`);
    }

    // 204 No Content (e.g. DELETE) — nothing to parse
    if (response.status === 204) {
        return null as T;
    }

    return response.json();
}

/**
 * Параметры для фильтрации списка техники
 */
export interface TechniqueFilterParams {
    page?: number;
    page_size?: number;
    model?: string;
    brand?: number;
    brand_name?: string;
    tag?: number;
    tag_name?: string;
    responsible?: string;
    responsible_name?: string;
}

/**
 * Получить список техники с опциональными фильтрами
 */
export async function getTechniqueList(params?: TechniqueFilterParams): Promise<TechniqueListResponse> {
    const queryParams = new URLSearchParams();

    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.page_size) queryParams.append('page_size', params.page_size.toString());
    if (params?.model) queryParams.append('model', params.model);
    if (params?.brand) queryParams.append('brand', params.brand.toString());
    if (params?.brand_name) queryParams.append('brand_name', params.brand_name);
    if (params?.tag) queryParams.append('tag', params.tag.toString());
    if (params?.tag_name) queryParams.append('tag_name', params.tag_name);
    if (params?.responsible) queryParams.append('responsible', params.responsible);
    if (params?.responsible_name) queryParams.append('responsible_name', params.responsible_name);

    const queryString = queryParams.toString();
    const endpoint = `/v1/technique/items${queryString ? '?' + queryString : ''}`;

    return fetchAPI<TechniqueListResponse>(endpoint);
}

/**
 * Получить детали одной техники по ID
 */
export async function getTechniqueById(id: number): Promise<TechniqueItem> {
    return fetchAPI<TechniqueItem>(`/v1/technique/items/${id}`);
}

/**
 * Интерфейс пользователя
 */
export interface User {
    id: string;
    phone: string;
    full_name: string;
    avatar?: string;
}

/**
 * Ответ API со списком пользователей
 */
export interface UsersListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: User[];
}

/**
 * Получить список всех пользователей
 */
export async function getUsers(): Promise<UsersListResponse> {
    return fetchAPI<UsersListResponse>('/v1/auth/users');
}

// ===== MAINTENANCE (TO) TYPES & API =====

export type MaintenanceStatus = 'planned' | 'due' | 'overdue' | 'in_progress' | 'done' | 'cancelled';
export type TaskStatus = 'pending' | 'done' | 'skipped';
export type PlanType = 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
export type PlanScheduleType = 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';

export interface TaskState {
    title: string;
    is_required: boolean;
    order: number;
    status: TaskStatus;
    checked_by_id?: string;
    checked_at?: string;
    comment?: string;
}

export interface MaintenanceProgress {
    completed: number;
    total: number;
    percentage: number;
}

export interface MaintenancePhoto {
    id: string;
    image: string;
    uploaded_by: {
        id: string;
        full_name: string;
    };
    uploaded_at: string;
}

// Plan from /api/v1/maintenance/plans/
export interface MaintenancePlan {
    id: string;
    title: string;
    description?: string;
    schedule_type: PlanScheduleType;
    schedule_type_display: string;
    equipment_ids: number[];
    tasks: Array<{
        title: string;
        is_required: boolean;
        order: number;
    }>;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface MaintenancePlansResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: MaintenancePlan[];
}

export interface MaintenanceInstance {
    plan: any;
    id: string;
    plan_title: string;
    plan_type: PlanType;
    plan_type_display: string;
    equipment: {
        id: number;
        brand_name: string;
        model: string;
        responsible: {
            id: string;
            full_name: string;
            avatar?: string;
        };
    };
    scheduled_date: string;
    assigned_to?: {
        id: string;
        full_name: string;
    } | null;
    status: MaintenanceStatus;
    status_display: string;
    task_states: TaskState[];
    progress: MaintenanceProgress;
    photos?: MaintenancePhoto[];
    started_at?: string;
    completed_at?: string;
    completed_by?: {
        id: string;
        full_name: string;
    };
    created_at?: string;
}

export interface MaintenanceListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: MaintenanceInstance[];
}

// Maintenance API Functions
export async function getMyMaintenanceTodos(params?: {
    date?: string;
    status?: MaintenanceStatus;
    equipment?: string | number;
    scheduled_date?: string;
}): Promise<MaintenanceListResponse> {
    const queryParams = new URLSearchParams();
    if (params?.date) queryParams.append('date', params.date);
    if (params?.status) queryParams.append('status', params.status);
    if (params?.equipment) queryParams.append('equipment', params.equipment.toString());
    if (params?.scheduled_date) queryParams.append('scheduled_date', params.scheduled_date);

    const queryString = queryParams.toString();
    const endpoint = `/v1/maintenance/instances${queryString ? '?' + queryString : ''}`;

    return fetchAPI<MaintenanceListResponse>(endpoint);
}

export async function getMaintenanceInstance(id: string): Promise<MaintenanceInstance> {
    return fetchAPI<MaintenanceInstance>(`/v1/maintenance/instances/${id}`);
}

export async function startMaintenance(id: string): Promise<MaintenanceInstance> {
    return fetchAPI<MaintenanceInstance>(`/v1/maintenance/instances/${id}/start`, {
        method: 'POST',
    });
}

export async function updateMaintenanceTasks(id: string, taskStates: TaskState[]): Promise<MaintenanceInstance> {
    return fetchAPI<MaintenanceInstance>(`/v1/maintenance/instances/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ task_states: taskStates }),
    });
}

export async function uploadMaintenancePhoto(id: string, imageFile: File): Promise<MaintenancePhoto> {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('instance', id);

    const token = typeof window !== 'undefined' ? localStorage.getItem('akfa_access_token') : null;
    const response = await fetch(`/api/v1/maintenance/photos`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to upload photo');
    }

    return response.json();
}

export async function completeMaintenance(id: string): Promise<MaintenanceInstance> {
    return fetchAPI<MaintenanceInstance>(`/v1/maintenance/instances/${id}/complete`, {
        method: 'POST',
    });
}

// Get maintenance plans
export async function getMaintenancePlans(params?: {
    equipment?: string | number;
    is_active?: boolean;
}): Promise<MaintenancePlansResponse> {
    const queryParams = new URLSearchParams();
    if (params?.equipment) queryParams.append('equipment', params.equipment.toString());
    if (params?.is_active !== undefined) queryParams.append('is_active', params.is_active.toString());

    const queryString = queryParams.toString();
    const endpoint = `/v1/maintenance/plans${queryString ? '?' + queryString : ''}`;

    return fetchAPI<MaintenancePlansResponse>(endpoint);
}

// Get maintenance instances with flexible filtering
export async function getMaintenanceInstances(params?: {
    equipment?: string | number;
    status?: MaintenanceStatus;
    ordering?: string;
    scheduled_date_after?: string;
    scheduled_date_before?: string;
    assigned_to?: string;
    completed_by?: string;
    'equipment__responsible'?: string;
    page?: number;
    page_size?: number;
}): Promise<MaintenanceListResponse> {
    const queryParams = new URLSearchParams();
    if (params?.equipment) queryParams.append('equipment', params.equipment.toString());
    if (params?.status) queryParams.append('status', params.status);
    if (params?.ordering) queryParams.append('ordering', params.ordering);
    if (params?.scheduled_date_after) queryParams.append('scheduled_date_after', params.scheduled_date_after);
    if (params?.scheduled_date_before) queryParams.append('scheduled_date_before', params.scheduled_date_before);
    if (params?.assigned_to) queryParams.append('assigned_to', params.assigned_to);
    if (params?.completed_by) queryParams.append('completed_by', params.completed_by);
    if (params?.['equipment__responsible']) queryParams.append('equipment__responsible', params['equipment__responsible']);
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.page_size) queryParams.append('page_size', params.page_size.toString());

    const queryString = queryParams.toString();
    const endpoint = `/v1/maintenance/instances${queryString ? '?' + queryString : ''}`;

    return fetchAPI<MaintenanceListResponse>(endpoint);
}

export async function deleteMaintenancePhoto(_instanceId: string, photoId: string): Promise<void> {
    await fetchAPI(`/v1/maintenance/photos/${photoId}`, {
        method: 'DELETE',
    });
}


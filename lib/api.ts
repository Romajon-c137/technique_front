import type { LoginRequest, LoginResponse } from '@/types/auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

class APIError extends Error {
    constructor(public status: number, message: string, public data?: any) {
        super(message);
        this.name = 'APIError';
    }
}

async function fetchAPI<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const config: RequestInit = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    };

    try {
        const response = await fetch(url, config);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));

            // Extract error message from various possible formats
            let errorMessage = 'An error occurred';

            if (errorData.non_field_errors && Array.isArray(errorData.non_field_errors)) {
                errorMessage = errorData.non_field_errors[0];
            } else if (errorData.detail) {
                errorMessage = errorData.detail;
            } else if (errorData.message) {
                errorMessage = errorData.message;
            }

            throw new APIError(response.status, errorMessage, errorData);
        }

        return await response.json();
    } catch (error) {
        if (error instanceof APIError) {
            throw error;
        }
        throw new Error('Network error. Please check your connection.');
    }
}

export async function login(credentials: LoginRequest): Promise<LoginResponse> {
    return fetchAPI<LoginResponse>('/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
    });
}

export async function updateProfile(data: {
    full_name?: string;
    phone?: string;
    birth_date?: string;
    avatar?: File;
}): Promise<LoginResponse['user']> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('akfa_access_token') : '';
    const formData = new FormData();
    if (data.full_name !== undefined) formData.append('full_name', data.full_name);
    if (data.phone !== undefined) formData.append('phone', data.phone);
    if (data.birth_date !== undefined) formData.append('birth_date', data.birth_date);
    if (data.avatar) formData.append('avatar', data.avatar);

    const response = await fetch(`/api/v1/auth/profile`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.detail || JSON.stringify(err) || 'Ошибка обновления');
    }
    return response.json();
}

export async function changePassword(data: {
    new_password: string;
    new_password_confirm: string;
}): Promise<void> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('akfa_access_token') : '';
    const response = await fetch(`/api/v1/auth/change-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(
            err.new_password_confirm || err.new_password || err.detail || 'Ошибка смены пароля'
        );
    }
}

export { APIError };

export interface LoginRequest {
  phone: string;
  password: string;
}

export interface User {
  id: number;
  phone: string;
  full_name: string;
  role: string;
  is_active: boolean;
  avatar?: string;
  birth_date?: string;
  last_login?: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

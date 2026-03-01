"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { login as apiLogin } from '@/lib/api';
import type { User, LoginRequest } from '@/types/auth';

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (credentials: LoginRequest) => Promise<void>;
    logout: () => void;
    updateUser: (updated: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = 'akfa_access_token';
const REFRESH_KEY = 'akfa_refresh_token';
const USER_KEY = 'akfa_user';

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    // Check for existing session on mount
    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);
        const savedUser = localStorage.getItem(USER_KEY);

        if (token && savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (error) {
                console.error('Failed to parse user data:', error);
                localStorage.removeItem(TOKEN_KEY);
                localStorage.removeItem(REFRESH_KEY);
                localStorage.removeItem(USER_KEY);
            }
        }

        setIsLoading(false);
    }, []);

    const login = async (credentials: LoginRequest) => {
        try {
            const response = await apiLogin(credentials);

            console.log('🔐 Login response:', response);
            console.log('Access token:', response.access_token);
            console.log('Refresh token:', response.refresh_token);
            console.log('User data:', response.user);

            // Store tokens and user data
            localStorage.setItem(TOKEN_KEY, response.access_token);
            localStorage.setItem(REFRESH_KEY, response.refresh_token);
            localStorage.setItem(USER_KEY, JSON.stringify(response.user));

            console.log('✅ Tokens saved to localStorage');
            console.log('TOKEN_KEY:', TOKEN_KEY, '=', localStorage.getItem(TOKEN_KEY));
            console.log('REFRESH_KEY:', REFRESH_KEY, '=', localStorage.getItem(REFRESH_KEY));

            setUser(response.user);

            // Redirect to home
            router.push('/home');
        } catch (error) {
            console.error('❌ Login error:', error);
            // Let the calling component handle the error
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(REFRESH_KEY);
        localStorage.removeItem(USER_KEY);
        setUser(null);
        router.push('/login');
    };

    const updateUser = (updated: Partial<User>) => {
        setUser(prev => {
            if (!prev) return prev;
            const next = { ...prev, ...updated };
            localStorage.setItem(USER_KEY, JSON.stringify(next));
            return next;
        });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                login,
                logout,
                updateUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

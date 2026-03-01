"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { APIError } from '@/lib/api';
import Image from 'next/image';
import logo from '@/public/image/Logo.png';

export default function LoginPage() {
    const [phone, setPhone] = useState('+996');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login, isAuthenticated } = useAuth();
    const router = useRouter();

    // Phone input handler with +996 prefix validation
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        // Always ensure the phone starts with +996
        if (!value.startsWith('+996')) {
            value = '+996' + value.replace(/^\+?996/, '');
        }

        // Remove duplicate +996 if user types it
        value = value.replace(/^\+996\+996/, '+996');

        setPhone(value);
    };

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            router.push('/home');
        }
    }, [isAuthenticated, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!phone || !password) {
            setError('Пожалуйста, заполните все поля');
            return;
        }

        setIsLoading(true);

        try {
            await login({ phone, password });
        } catch (err) {
            if (err instanceof APIError) {
                // Display the exact error message from backend
                setError(err.message);
            } else {
                setError('Произошла ошибка. Попробуйте позже.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-3.5">
            <div className="w-full max-w-md">
                {/* Logo/Title */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-[200px] mb-4 ">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={200}
                        />
                    </div>
                    <p className="body-m text-dark-100">Войдите в свой аккаунт</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Error Message */}
                        {error && (
                            <div className="bg-error-100 border border-error-500 rounded-lg p-3 flex items-center gap-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-error-500 flex-shrink-0 mt-0.5">
                                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9946 16H12.0036" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="body-s text-error-900 flex-1">{error}</p>
                            </div>
                        )}

                        {/* Phone Input */}
                        <div>
                            <label htmlFor="phone" className="block body-m font-semibold text-dark-900 mb-2">
                                Номер телефона
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={handlePhoneChange}
                                placeholder="+996550998609"
                                className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all body-m text-dark-900 placeholder:text-dark-100"
                                disabled={isLoading}
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block body-m font-semibold text-dark-900 mb-2">
                                Пароль
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all body-m text-dark-900 placeholder:text-dark-100"
                                    disabled={isLoading}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-100 hover:text-dark-900 transition-colors"
                                    disabled={isLoading}
                                >
                                    {showPassword ? (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M14.53 9.47004L9.47004 14.53C8.82004 13.88 8.42004 12.99 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C12.99 8.42004 13.88 8.82004 14.53 9.47004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73C8.46997 3.73 5.17997 5.81 2.88997 9.41C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.42004 19.5301C9.56004 20.0101 10.77 20.2701 12 20.2701C15.53 20.2701 18.82 18.1901 21.11 14.5901C22.01 13.1801 22.01 10.8101 21.11 9.40005C20.78 8.88005 20.42 8.39005 20.05 7.93005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.47 14.53L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 2L14.53 9.47" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary-500 hover:bg-primary-400 active:bg-primary-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Вход...</span>
                                </>
                            ) : (
                                <span>Войти</span>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <p className="text-center body-s text-dark-100 mt-6">
                    Akfa Technique © 2026
                </p>
            </div>

            {/* Decorative Red Stripes Pattern */}
            <div className="absolute -bottom-20 left-0 right-0 w-full pointer-events-none z-0">
                <svg width="100%" height="107" viewBox="0 0 675 107" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <rect width="675" height="3.08847" fill="#EE3626" />
                    <rect y="11.5039" width="675" height="4.62898" fill="#EE3626" />
                    <rect y="24.5488" width="675" height="6.94347" fill="#EE3626" />
                    <rect y="39.9077" width="675" height="10.4189" fill="#EE3626" />
                    <rect y="58.7422" width="675" height="15.6284" fill="#EE3626" />
                    <rect y="82.7861" width="675" height="23.4426" fill="#EE3626" />
                </svg>
            </div>
        </div>
    );
}

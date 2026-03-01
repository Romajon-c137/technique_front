'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { MdChevronRight, MdPhone, MdArrowBack, MdClose } from 'react-icons/md';

interface ResponsibleUser {
    id: string;
    phone: string;
    full_name: string;
    avatar?: string;
    role?: string;
    birth_date?: string;
}

export default function ResponsiblePage() {
    const params = useParams();
    const router = useRouter();
    const [user, setUser] = useState<ResponsibleUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showAvatarModal, setShowAvatarModal] = useState(false);

    const userId = params.id as string;

    useEffect(() => {
        const loadUser = async () => {
            try {
                setLoading(true);
                setError(null);

                const token = localStorage.getItem('akfa_access_token');
                const response = await fetch(`/api/v1/auth/users/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to load user data');
                }

                const data = await response.json();
                console.log('User data:', data); // Debug
                setUser(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Произошла ошибка');
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, [userId]);

    const calculateAge = (birthDate?: string) => {
        if (!birthDate) return null;
        const birth = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    const formatPhone = (phone: string) => {
        return phone.startsWith('+') ? phone : `+${phone}`;
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600">Загрузка...</p>
            </div>
        );
    }

    if (error || !user) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <p className="text-red-600 mb-4">Ошибка: {error || 'Пользователь не найден'}</p>
                <button
                    onClick={() => router.back()}
                    className="px-4 py-2 bg-primary-500 text-white rounded-xl"
                >
                    Назад
                </button>
            </div>
        );
    }

    const age = calculateAge(user.birth_date);

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            {/* Header */}
            <div className="flex items-center mb-6">
                <button
                    onClick={() => router.back()}
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition"
                >
                    <MdArrowBack className="w-6 h-6 text-dark" />
                </button>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-3xl p-6 mb-4 shadow-sm">
                {/* Avatar and Info */}
                <div className="flex items-start gap-4 mb-6">
                    <button
                        onClick={() => user.avatar && setShowAvatarModal(true)}
                        className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden shrink-0 cursor-pointer hover:opacity-90 transition"
                    >
                        {user.avatar ? (
                            <Image
                                src={user.avatar}
                                alt={user.full_name}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                                unoptimized
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-500 text-3xl font-bold">
                                {user.full_name.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </button>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-dark mb-1">{user.full_name}</h1>
                        <p className="text-dark-200">
                            {user.role || 'Тех инженер'}
                            {age && `, ${age} ${age === 1 ? 'год' : age < 5 ? 'года' : 'лет'}`}
                        </p>
                    </div>
                </div>

                <div className="h-px bg-gray-200 mb-6"></div>

                {/* Phone Section */}
                <div className="mb-6">
                    <h2 className="text-lg font-bold text-dark mb-3">Телефон</h2>
                    <a
                        href={`tel:${user.phone}`}
                        className="text-lg text-primary-500 hover:text-primary-600 transition flex items-center gap-2"
                    >
                        <MdPhone className="w-5 h-5" />
                        {formatPhone(user.phone)}
                    </a>
                </div>

                {/* Techniques Section */}
                <div>
                    <h2 className="text-lg font-bold text-dark mb-2">Теники</h2>
                    <button
                        onClick={() => router.push(`/techniques?responsible=${userId}`)}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition group"
                    >
                        <p className="text-gray-600">
                            Техники которых обслуживает {user.full_name.split(' ')[0]}
                        </p>
                        <MdChevronRight className="w-6 h-6 text-gray-400 group-hover:text-dark transition" />
                    </button>
                </div>
            </div>

            {/* Avatar Modal */}
            {showAvatarModal && user.avatar && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
                        onClick={() => setShowAvatarModal(false)}
                    >
                        <button
                            onClick={() => setShowAvatarModal(false)}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition"
                        >
                            <MdClose className="w-6 h-6 text-white" />
                        </button>
                        <div className="relative max-w-2xl max-h-[80vh] animate-scale-in">
                            <Image
                                src={user.avatar}
                                alt={user.full_name}
                                width={600}
                                height={600}
                                className="rounded-2xl object-contain max-h-[80vh]"
                                unoptimized
                            />
                        </div>
                    </div>
                </>
            )}

            <style jsx global>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }

                .animate-scale-in {
                    animation: scale-in 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}

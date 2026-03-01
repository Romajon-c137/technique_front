'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdNotifications } from 'react-icons/md';
import { getUnreadCount } from '@/lib/notificationsApi';
import BannerSlider from '@/components/BannerSlider';
import HomeStats from '@/components/HomeStats';
import HomeTeam from '@/components/HomeTeam';

export default function HomePage() {
    const router = useRouter();
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        getUnreadCount()
            .then(data => setUnreadCount(data.unread_count))
            .catch(() => { });
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <div className="flex items-center justify-between px-4 pt-4 pb-3">
                <h1 className="text-2xl font-bold text-dark">Главная</h1>

                {/* Bell button */}
                <button
                    onClick={() => router.push('/home/notifications')}
                    className="relative w-11 h-11 flex items-center justify-center rounded-2xl bg-primary-50 hover:bg-primary-100 transition active:scale-95"
                >
                    <MdNotifications className="w-6 h-6 text-primary-500" />
                    {unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                            {unreadCount > 99 ? '99+' : unreadCount}
                        </span>
                    )}
                </button>
            </div>

            {/* Notification preview */}
            {unreadCount > 0 && (
                <div className="px-4 mb-4">
                    <button
                        onClick={() => router.push('/home/notifications')}
                        className="w-full bg-primary-50 border border-primary-100 rounded-2xl p-4 flex items-center gap-3 hover:bg-primary-100 transition active:scale-[0.99] text-left"
                    >
                        <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                            <MdNotifications className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-dark text-sm">Новые уведомления</p>
                            <p className="text-xs text-gray-500">
                                У вас {unreadCount} непрочитанн{unreadCount === 1 ? 'ое' : 'ых'} уведомлений
                            </p>
                        </div>
                    </button>
                </div>
            )}

            {/* Banner slider */}
            <div className="pl-4">
                <BannerSlider />
            </div>

            {/* Stats */}
            <div className="mt-5">
                <HomeStats />
            </div>

            {/* Team */}
            <HomeTeam />
        </div>
    );
}

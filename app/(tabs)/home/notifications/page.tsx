'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
    MdInfoOutline,
    MdWarningAmber,
    MdErrorOutline,
    MdCheckCircle,
    MdDoneAll,
} from 'react-icons/md';
import { HeaderNav } from '@/components/HeaderNav';
import {
    getNotifications,
    markAsRead,
    markAllRead,
} from '@/lib/notificationsApi';
import type { Notification, NotificationType } from '@/lib/notificationsApi';

// ── Icon & color config per type ────────────────────────────────────────────

interface TypeConfig {
    bgCard: string;
    bgIcon: string;
    iconColor: string;
    Icon: React.ElementType;
}

const TYPE_CONFIG: Record<NotificationType, TypeConfig> = {
    maintenance_today: {
        bgCard: 'bg-orange-50 border-orange-100',
        bgIcon: 'bg-orange-100',
        iconColor: 'text-orange-500',
        Icon: MdWarningAmber,
    },
    maintenance_overdue: {
        bgCard: 'bg-red-50 border-red-100',
        bgIcon: 'bg-red-100',
        iconColor: 'text-red-500',
        Icon: MdErrorOutline,
    },
    manual: {
        bgCard: 'bg-blue-50 border-blue-100',
        bgIcon: 'bg-blue-100',
        iconColor: 'text-blue-500',
        Icon: MdInfoOutline,
    },
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatTime(dateStr: string): string {
    const d = new Date(dateStr);
    const now = new Date();
    const isToday =
        d.getDate() === now.getDate() &&
        d.getMonth() === now.getMonth() &&
        d.getFullYear() === now.getFullYear();

    const time = d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    if (isToday) return `сегодня, ${time}`;

    return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }) + `, ${time}`;
}

// ── Main page ────────────────────────────────────────────────────────────────

export default function NotificationsPage() {
    const router = useRouter();
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);

    const load = useCallback(async () => {
        try {
            const res = await getNotifications();
            setNotifications(res.results);
        } catch {
            // silent
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { load(); }, [load]);

    const handleMarkRead = async (id: string) => {
        try {
            const updated = await markAsRead(id);
            setNotifications(prev =>
                prev.map(n => n.id === id ? { ...n, is_read: updated.is_read } : n)
            );
        } catch { /* silent */ }
    };

    const handleMarkAllRead = async () => {
        try {
            await markAllRead();
            setNotifications(prev => prev.map(n => ({ ...n, is_read: true })));
        } catch { /* silent */ }
    };

    const handleCardClick = (n: Notification) => {
        if (!n.is_read) handleMarkRead(n.id);
        // All notifications open the detail page
        router.push(`/home/notifications/${n.id}`);
    };

    const unreadCount = notifications.filter(n => !n.is_read).length;

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <p className="text-gray-500">Загрузка...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <HeaderNav title="Уведомления" />

            {/* Mark all read */}
            {unreadCount > 0 && (
                <button
                    onClick={handleMarkAllRead}
                    className="flex items-center gap-1.5 ml-auto mb-4 text-sm text-primary-500 font-medium hover:text-primary-600 transition"
                >
                    <MdDoneAll className="w-4 h-4" />
                    Прочитать все ({unreadCount})
                </button>
            )}

            {/* Empty state */}
            {notifications.length === 0 && (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                        <MdCheckCircle className="w-8 h-8 text-gray-300" />
                    </div>
                    <p className="text-gray-500 font-medium">Нет уведомлений</p>
                    <p className="text-sm text-gray-400 mt-1">Всё под контролем!</p>
                </div>
            )}

            {/* Notification cards */}
            <div className="space-y-3">
                {notifications.map(n => {
                    const cfg = TYPE_CONFIG[n.type] ?? TYPE_CONFIG.manual;
                    const { Icon } = cfg;
                    const isClickable = !!(n.related_instance_id && n.related_equipment_id);

                    return (
                        <div
                            key={n.id}
                            onClick={() => handleCardClick(n)}
                            className={`relative flex gap-3 p-4 rounded-2xl border transition
                                ${cfg.bgCard}
                                ${n.is_read ? 'opacity-70' : ''}
                                ${isClickable ? 'cursor-pointer active:scale-[0.99]' : ''}
                            `}
                        >
                            {/* Type icon */}
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${cfg.bgIcon}`}>
                                <Icon className={`w-5 h-5 ${cfg.iconColor}`} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start gap-2">
                                    <p className={`text-sm font-semibold text-dark leading-snug ${!n.is_read ? 'font-bold' : ''}`}>
                                        {n.title}
                                    </p>
                                    <span className="text-[10px] text-gray-600 whitespace-nowrap shrink-0">
                                        {formatTime(n.created_at)}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed line-clamp-2">
                                    {n.body}
                                </p>
                            </div>

                            {/* Unread dot */}
                            {!n.is_read && (
                                <button
                                    onClick={e => { e.stopPropagation(); handleMarkRead(n.id); }}
                                    className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary-500 hover:bg-primary-700 transition"
                                    title="Отметить как прочитанное"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
    MdArrowBack, MdWarningAmber, MdErrorOutline, MdInfoOutline,
    MdCalendarToday, MdBuild,
} from 'react-icons/md';
import { getNotification, markAsRead } from '@/lib/notificationsApi';
import { getTechniqueById, getMaintenanceInstance } from '@/lib/techniqueApi';
import type { NotificationDetail, NotificationType, ElementType } from '@/lib/notificationsApi';
import type { TechniqueItem, MaintenanceInstance } from '@/lib/techniqueApi';

// ── Config ───────────────────────────────────────────────────────────────────

const TYPE_CONFIG: Record<NotificationType, {
    cardBg: string; iconBg: string; iconColor: string;
    badge: string; badgeText: string; icon: React.ElementType;
}> = {
    maintenance_today: {
        cardBg: 'bg-orange-50',
        iconBg: 'bg-orange-100', iconColor: 'text-orange-500',
        badge: 'bg-orange-500', badgeText: 'Сегодня',
        icon: MdWarningAmber,
    },
    maintenance_overdue: {
        cardBg: 'bg-red-50',
        iconBg: 'bg-red-100', iconColor: 'text-red-500',
        badge: 'bg-red-500', badgeText: 'Просрочено',
        icon: MdErrorOutline,
    },
    manual: {
        cardBg: 'bg-blue-50',
        iconBg: 'bg-blue-100', iconColor: 'text-blue-500',
        badge: 'bg-blue-500', badgeText: 'Уведомление',
        icon: MdInfoOutline,
    },
};

// ── Element renderers ─────────────────────────────────────────────────────────

function TextBlock({ text }: { text: string }) {
    return <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{text}</p>;
}

function ImageBlock({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="w-full rounded-2xl overflow-hidden bg-gray-100" style={{ aspectRatio: '16/9' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="w-full h-full object-contain" />
        </div>
    );
}

function VideoBlock({ url }: { url: string }) {
    const ytId = url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/)?.[1];
    const vimeoId = url.match(/vimeo\.com\/(\d+)/)?.[1];

    if (ytId) return (
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <iframe src={`https://www.youtube.com/embed/${ytId}`} className="w-full h-full" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" />
        </div>
    );
    if (vimeoId) return (
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <iframe src={`https://player.vimeo.com/video/${vimeoId}`} className="w-full h-full" allowFullScreen />
        </div>
    );
    return <video src={url} controls className="w-full rounded-2xl bg-black" />;
}

function renderElement(el: { id: string; element_type: ElementType; text_content: string | null; image: string | null; video_url: string | null }, idx: number) {
    switch (el.element_type) {
        case 'text': return el.text_content ? <TextBlock key={el.id} text={el.text_content} /> : null;
        case 'image': return el.image ? <ImageBlock key={el.id} src={el.image} alt={`Фото ${idx + 1}`} /> : null;
        case 'video': return el.video_url ? <VideoBlock key={el.id} url={el.video_url} /> : null;
        default: return null;
    }
}

// ── Technique card (for maintenance notifications) ────────────────────────────

function TechniqueCard({
    technique, instance, cfg
}: {
    technique: TechniqueItem;
    instance: MaintenanceInstance;
    cfg: typeof TYPE_CONFIG[NotificationType];
}) {
    const firstImage = technique.images?.[0]?.image ?? null;
    // API returns brand as object {id, name} and tag as single object (not array)
    const brandName = (technique as any).brand?.name ?? (technique as any).brand_name ?? '';
    const tagName = (technique as any).tag?.name ?? '';
    const schedDate = new Date(instance.scheduled_date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });

    return (
        <div className={`rounded-2xl overflow-hidden ${cfg.cardBg} border border-white`}>
            {/* Image — use plain img to avoid Next.js private-IP block on localhost */}
            <div className="relative w-full bg-gray-100 overflow-hidden" style={{ height: 180 }}>
                {firstImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={firstImage} alt={technique.model} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <MdBuild className="w-12 h-12 text-gray-300" />
                    </div>
                )}
                {tagName && (
                    <span className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {tagName}
                    </span>
                )}
            </div>

            {/* Info */}
            <div className="p-4">
                <p className="font-bold text-dark text-base">
                    {brandName} {technique.model}
                </p>
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-500">
                    <MdCalendarToday className="w-4 h-4" />
                    <span>
                        {instance.plan_type_display} ТО: {schedDate}
                    </span>
                </div>
                {instance.plan_title && (
                    <p className="mt-1 text-xs text-gray-400 line-clamp-1">
                        {instance.plan_title}
                    </p>
                )}
            </div>
        </div>
    );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function NotificationDetailPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const [notification, setNotification] = useState<NotificationDetail | null>(null);
    const [technique, setTechnique] = useState<TechniqueItem | null>(null);
    const [instance, setInstance] = useState<MaintenanceInstance | null>(null);
    const [loading, setLoading] = useState(true);

    const load = useCallback(async () => {
        try {
            // Load notification
            const data = await getNotification(id);
            setNotification(data);
            if (!data.is_read) {
                await markAsRead(id);
                setNotification(prev => prev ? { ...prev, is_read: true } : prev);
            }

            // For maintenance notifications — load technique + instance
            if (
                (data.type === 'maintenance_today' || data.type === 'maintenance_overdue') &&
                data.related_equipment_id && data.related_instance_id
            ) {
                const [tech, inst] = await Promise.all([
                    getTechniqueById(data.related_equipment_id),
                    getMaintenanceInstance(data.related_instance_id),
                ]);
                setTechnique(tech);
                setInstance(inst);
            }
        } catch {
            router.back();
        } finally {
            setLoading(false);
        }
    }, [id, router]);

    useEffect(() => { load(); }, [load]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <p className="text-gray-400">Загрузка...</p>
            </div>
        );
    }

    if (!notification) return null;

    const cfg = TYPE_CONFIG[notification.type] ?? TYPE_CONFIG.manual;
    const Icon = cfg.icon;
    const isMaintenance = notification.type === 'maintenance_today' || notification.type === 'maintenance_overdue';

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="flex items-center gap-3 px-1 pt-4 pb-4">
                <button
                    onClick={() => router.back()}
                    className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
                >
                    <MdArrowBack className="w-6 h-6 text-gray-600" />
                </button>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${cfg.iconBg}`}>
                    <Icon className={`w-5 h-5 ${cfg.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full text-white ${cfg.badge}`}>
                        {cfg.badgeText}
                    </span>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                        {new Date(notification.created_at).toLocaleString('ru-RU', {
                            day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
                        })}
                    </p>
                </div>
            </div>

            {/* Notification banner */}
            <div className={`rounded-2xl p-4 mb-5 ${cfg.cardBg} flex gap-3 items-start`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${cfg.iconBg}`}>
                    <Icon className={`w-5 h-5 ${cfg.iconColor}`} />
                </div>
                <div>
                    <p className="text-sm font-bold text-dark">{notification.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{notification.body}</p>
                </div>
            </div>

            {/* Maintenance: technique card */}
            {isMaintenance && technique && instance && (
                <>
                    <TechniqueCard technique={technique} instance={instance} cfg={cfg} />

                    <div className="mt-6 space-y-3">
                        {/* Open maintenance */}
                        <button
                            onClick={() => router.push(
                                `/techniques/${notification.related_equipment_id}/maintenance/${notification.related_instance_id}`
                            )}
                            className="w-full py-3.5 rounded-2xl border-2 border-primary-500 text-primary-500 font-semibold text-sm hover:bg-primary-50 transition active:scale-[0.99]"
                        >
                            Открыть ТО
                        </button>

                        {/* Complete maintenance */}
                        {notification.type === 'maintenance_overdue' && (
                            <button
                                onClick={() => router.push(
                                    `/techniques/${notification.related_equipment_id}/maintenance/${notification.related_instance_id}`
                                )}
                                className="w-full py-3.5 rounded-2xl bg-red-500 text-white font-semibold text-sm hover:bg-red-600 transition active:scale-[0.99]"
                            >
                                Завершить ТО
                            </button>
                        )}
                    </div>
                </>
            )}

            {/* Manual: rich content elements */}
            {!isMaintenance && notification.elements.length > 0 && (
                <>
                    <div className="border-t border-gray-100 mb-5" />
                    <div className="space-y-5">
                        {notification.elements
                            .sort((a, b) => a.order - b.order)
                            .map((el, idx) => renderElement(el, idx))}
                    </div>
                </>
            )}
        </div>
    );
}

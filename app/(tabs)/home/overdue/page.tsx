'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { MdWarning, MdBuild } from 'react-icons/md';
import { HeaderNav } from '@/components/HeaderNav';
import { getMaintenanceInstances } from '@/lib/techniqueApi';
import type { MaintenanceInstance } from '@/lib/techniqueApi';
import { useAuth } from '@/contexts/AuthContext';

export default function OverduePage() {
    const router = useRouter();
    const { user } = useAuth();
    const [items, setItems] = useState<MaintenanceInstance[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);

    const load = useCallback(async (p = 1) => {
        if (!user?.id) return;
        setLoading(true);
        try {
            const res = await getMaintenanceInstances({
                status: 'overdue',
                'equipment__responsible': user.id.toString(),
                ordering: 'scheduled_date',
                page: p,
                page_size: 20,
            });
            if (p === 1) setItems(res.results ?? []);
            else setItems(prev => [...prev, ...(res.results ?? [])]);
            setHasMore(!!res.next);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }, [user?.id]);

    useEffect(() => { load(1); }, [load]);

    const getEquipmentName = (item: MaintenanceInstance) => {
        const eq = item.equipment as any;
        if (!eq) return '—';
        const brand = eq.brand_name ?? '';
        const model = eq.model ?? '';
        if (brand && model) return `${brand} / ${model}`;
        return brand || model || '—';
    };

    return (
        <div className="min-h-screen bg-white">
            <HeaderNav title="Просроченные задачи" />

            <div className="px-4 pt-4 pb-12">
                {loading && items.length === 0 ? (
                    <div className="flex items-center justify-center py-20">
                        <p className="text-gray-400">Загрузка...</p>
                    </div>
                ) : items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-3">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                            <MdBuild className="w-8 h-8 text-green-400" />
                        </div>
                        <p className="text-gray-400 text-center">Нет просроченных задач! 🎉</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {items.map(item => (
                            <button
                                key={item.id}
                                onClick={() => router.push(`/techniques/${item.equipment.id}/maintenance/${item.id}`)}
                                className="w-full text-left bg-red-50 border border-red-100 rounded-2xl p-4 hover:bg-red-100 transition active:scale-[0.99]"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                        <MdWarning className="w-4 h-4 text-red-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-gray-700 text-base truncate">{item.plan_title}</p>
                                        <p className="text-xs text-gray-600 mt-0.5">{getEquipmentName(item)}</p>
                                        <p className="text-xs text-red-500 mt-1 font-medium">
                                            Дата: {new Date(item.scheduled_date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}

                        {hasMore && (
                            <button
                                onClick={() => { const next = page + 1; setPage(next); load(next); }}
                                className="w-full py-3 text-primary-500 font-medium text-sm"
                            >
                                {loading ? 'Загрузка...' : 'Загрузить ещё'}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

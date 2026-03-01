'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { MdToday, MdCheckCircle } from 'react-icons/md';
import { HeaderNav } from '@/components/HeaderNav';
import { getMaintenanceInstances } from '@/lib/techniqueApi';
import type { MaintenanceInstance } from '@/lib/techniqueApi';
import { useAuth } from '@/contexts/AuthContext';

const STATUS_COLORS: Record<string, string> = {
    done: 'text-green-500 bg-green-50',
    in_progress: 'text-blue-500 bg-blue-50',
    pending: 'text-gray-400 bg-gray-50',
};
const STATUS_LABELS: Record<string, string> = {
    done: 'Выполнено',
    in_progress: 'В процессе',
    pending: 'Ожидает',
};

export default function TodayPage() {
    const router = useRouter();
    const { user } = useAuth();
    const [items, setItems] = useState<MaintenanceInstance[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);

    const todayStr = new Date().toISOString().split('T')[0];

    const load = useCallback(async (p = 1) => {
        if (!user?.id) return;
        setLoading(true);
        try {
            const res = await getMaintenanceInstances({
                scheduled_date_after: todayStr,
                scheduled_date_before: todayStr,
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
            <HeaderNav title="На сегодня" />

            <div className="px-4 pt-4 pb-12">
                {loading && items.length === 0 ? (
                    <div className="flex items-center justify-center py-20">
                        <p className="text-gray-400">Загрузка...</p>
                    </div>
                ) : items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-3">
                        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
                            <MdCheckCircle className="w-8 h-8 text-primary-400" />
                        </div>
                        <p className="text-gray-400 text-center">На сегодня задач нет</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <p className="text-xs text-gray-400 mb-1">
                            {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>

                        {items.map(item => {
                            const colorClass = STATUS_COLORS[item.status] ?? STATUS_COLORS.pending;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => router.push(`/techniques/${item.equipment.id}/maintenance/${item.id}`)}
                                    className="w-full text-left bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition active:scale-[0.99]"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${colorClass}`}>
                                            <MdToday className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-dark text-sm truncate">{item.plan_title}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{getEquipmentName(item)}</p>
                                            <span className={`inline-block mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full ${colorClass}`}>
                                                {STATUS_LABELS[item.status] ?? item.status}
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}

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

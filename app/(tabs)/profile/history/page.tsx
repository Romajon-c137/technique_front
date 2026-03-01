'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { MdBuild, MdCheckCircle } from 'react-icons/md';
import { useAuth } from '@/contexts/AuthContext';
import { getMaintenanceInstances } from '@/lib/techniqueApi';
import { HeaderNav } from '@/components/HeaderNav';
import type { MaintenanceInstance } from '@/lib/techniqueApi';

export default function HistoryPage() {
    const { user } = useAuth();
    const router = useRouter();
    const [instances, setInstances] = useState<MaintenanceInstance[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);

    const load = useCallback(async (pageNum = 1) => {
        if (!user?.id) return;
        try {
            setLoading(true);

            // Fetch done instances where user completed it OR is responsible for the equipment
            const [byCompleted, byResponsible] = await Promise.all([
                getMaintenanceInstances({
                    completed_by: user.id.toString(),
                    status: 'done',
                    ordering: '-completed_at',
                    page: pageNum,
                    page_size: 20,
                }),
                getMaintenanceInstances({
                    'equipment__responsible': user.id.toString(),
                    status: 'done',
                    ordering: '-completed_at',
                    page: pageNum,
                    page_size: 20,
                }),
            ]);

            // Merge and deduplicate by id
            const seen = new Set<string>();
            const merged: MaintenanceInstance[] = [];
            [...(byCompleted?.results || []), ...(byResponsible?.results || [])].forEach(item => {
                if (!seen.has(item.id)) {
                    seen.add(item.id);
                    merged.push(item);
                }
            });
            // Sort by completed_at desc
            merged.sort((a, b) => {
                const da = a.completed_at ? new Date(a.completed_at).getTime() : 0;
                const db = b.completed_at ? new Date(b.completed_at).getTime() : 0;
                return db - da;
            });

            if (pageNum === 1) {
                setInstances(merged);
            } else {
                setInstances(prev => {
                    const prevSeen = new Set(prev.map(i => i.id));
                    return [...prev, ...merged.filter(i => !prevSeen.has(i.id))];
                });
            }
            setHasMore(!!(byCompleted?.next || byResponsible?.next));
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [user?.id]);

    useEffect(() => { load(1); }, [load]);

    const formatCompleted = (dateStr?: string) => {
        if (!dateStr) return '—';
        return new Date(dateStr).toLocaleString('ru-RU', {
            day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
        });
    };

    const getEquipmentName = (item: MaintenanceInstance) => {
        const eq = item.equipment as any;
        if (!eq) return '—';
        const brand = eq.brand?.name ?? eq.brand_name ?? '';
        return `${brand} ${eq.model}`.trim();
    };

    return (
        <div className="min-h-screen bg-white">
            <HeaderNav title="История обслуживания" />

            <div className="px-4 pt-4">
                {loading && instances.length === 0 ? (
                    <div className="flex items-center justify-center py-20">
                        <p className="text-gray-400">Загрузка...</p>
                    </div>
                ) : instances.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <MdBuild className="w-16 h-16 text-gray-200" />
                        <p className="text-gray-400 text-center">Нет выполненных работ</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {instances.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => router.push(
                                    `/techniques/${item.equipment.id}/maintenance/${item.id}`
                                )}
                                className="w-full text-left bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition active:scale-[0.99]"
                            >
                                <p className="font-semibold text-dark text-sm">{item.plan_title}</p>
                                <p className="text-xs text-gray-400 mt-0.5">{item.plan_type_display}</p>
                                <p className="text-xs text-gray-500 mt-1">{getEquipmentName(item)}</p>
                                {item.completed_at && (
                                    <div className="flex items-center gap-1.5 mt-2 text-xs text-green-500">
                                        <MdCheckCircle className="w-3.5 h-3.5" />
                                        <span>{formatCompleted(item.completed_at)}</span>
                                    </div>
                                )}
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

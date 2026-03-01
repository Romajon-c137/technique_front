'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { MdBuild, MdChevronRight } from 'react-icons/md';
import { HeaderNav } from '@/components/HeaderNav';
import { getMaintenanceInstances } from '@/lib/techniqueApi';
import type { MaintenanceInstance } from '@/lib/techniqueApi';
import { useAuth } from '@/contexts/AuthContext';

export default function InProgressPage() {
    const router = useRouter();
    const { user } = useAuth();
    const [items, setItems] = useState<MaintenanceInstance[]>([]);
    const [loading, setLoading] = useState(true);

    const load = useCallback(async () => {
        if (!user?.id) return;
        setLoading(true);
        try {
            const res = await getMaintenanceInstances({
                status: 'in_progress',
                'equipment__responsible': user.id.toString(),
                ordering: 'scheduled_date',
                page_size: 50,
            });
            setItems(res.results ?? []);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }, [user?.id]);

    useEffect(() => { load(); }, [load]);

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
            <HeaderNav title="Тех обслужование в процессе" />

            <div className="px-4 pt-4 pb-12">
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <p className="text-gray-400">Загрузка...</p>
                    </div>
                ) : items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-3">
                        <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center">
                            <MdBuild className="w-8 h-8 text-yellow-400" />
                        </div>
                        <p className="text-gray-400 text-center">Нет активных Тех обслужование</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <p className="text-xs text-gray-400 mb-1">
                            {items.length} {items.length === 1 ? 'задача' : 'задач'} в процессе
                        </p>

                        {items.map(item => (
                            <button
                                key={item.id}
                                onClick={() => router.push(`/techniques/${item.equipment.id}/maintenance/${item.id}`)}
                                className="w-full text-left bg-yellow-50 border border-yellow-100 rounded-2xl p-4 flex items-center gap-3 hover:bg-yellow-100 transition active:scale-[0.99]"
                            >
                                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center shrink-0">
                                    <MdBuild className="w-5 h-5 text-yellow-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-yellow-800 text-sm truncate">{item.plan_title}</p>
                                    <p className="text-xs text-gray-700 mt-0.5">{getEquipmentName(item)}</p>
                                    <p className="text-xs text-yellow-600 mt-1 font-medium">
                                        {new Date(item.scheduled_date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
                                    </p>
                                </div>
                                <MdChevronRight className="w-5 h-5 text-gray-300 shrink-0" />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

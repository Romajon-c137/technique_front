'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdWarning, MdToday, MdBuild, MdChevronRight } from 'react-icons/md';
import { getMaintenanceInstances, getTechniqueList } from '@/lib/techniqueApi';
import { useAuth } from '@/contexts/AuthContext';

interface Stat {
    icon: React.ReactNode;
    label: string;
    value: number | string;
    sub?: string;
    color: string;       // bg colour class
    textColor: string;   // icon + number colour
    href: string;
}

export default function HomeStats() {
    const router = useRouter();
    const { user } = useAuth();
    const [overdue, setOverdue] = useState<number | null>(null);
    const [today, setToday] = useState<number | null>(null);
    const [total, setTotal] = useState<number | null>(null);
    const [inProgress, setInProgress] = useState<number | null>(null);

    useEffect(() => {
        if (!user?.id) return;
        const todayStr = new Date().toISOString().split('T')[0];

        Promise.allSettled([
            // Overdue tasks
            getMaintenanceInstances({
                status: 'overdue',
                'equipment__responsible': user.id.toString(),
                page_size: 1,
            }),
            // Today's tasks
            getMaintenanceInstances({
                scheduled_date_after: todayStr,
                scheduled_date_before: todayStr,
                'equipment__responsible': user.id.toString(),
                page_size: 1,
            }),
            // Total equipment
            getTechniqueList({
                responsible: user.id.toString(),
                page_size: 1,
            }),
            // In-progress tasks
            getMaintenanceInstances({
                status: 'in_progress',
                'equipment__responsible': user.id.toString(),
                page_size: 1,
            }),
        ]).then(([over, tod, eq, inp]) => {
            setOverdue(over.status === 'fulfilled' ? (over.value.count ?? 0) : 0);
            setToday(tod.status === 'fulfilled' ? (tod.value.count ?? 0) : 0);
            setTotal(eq.status === 'fulfilled' ? (eq.value.count ?? 0) : 0);
            setInProgress(inp.status === 'fulfilled' ? (inp.value.count ?? 0) : 0);
        });
    }, [user?.id]);

    const stats: Stat[] = [
        {
            icon: <MdWarning className="w-5 h-5" />,
            label: 'Просрочено',
            value: overdue ?? '—',
            color: overdue ? 'bg-red-50' : 'bg-primary-100',
            textColor: overdue ? 'text-red-500' : 'text-primary-500',
            href: '/home/overdue',
        },
        {
            icon: <MdToday className="w-5 h-5" />,
            label: 'На сегодня',
            value: today ?? '—',
            color: 'bg-primary-100',
            textColor: 'text-primary-500',
            href: '/home/today',
        },
        {
            icon: <MdBuild className="w-5 h-5" />,
            label: 'Мои техники',
            value: total ?? '—',
            color: 'bg-primary-100',
            textColor: 'text-primary-500',
            href: user?.id ? `/techniques?responsible=${user.id}` : '/techniques',
        },
    ];

    return (
        <div className="space-y-3">
            {/* 3 stat cards */}
            <div className="grid grid-cols-3 gap-3 px-4">
                {stats.map(s => (
                    <button
                        key={s.label}
                        onClick={() => router.push(s.href)}
                        className={`${s.color} rounded-2xl p-3 flex flex-col gap-1.5 text-left active:scale-95 transition`}
                    >
                        <span className={s.textColor}>{s.icon}</span>
                        <span className={`text-xl font-bold leading-none ${s.textColor}`}>
                            {s.value}
                        </span>
                        <span className="text-[11px] text-gray-600 leading-tight">{s.label}</span>
                    </button>
                ))}
            </div>

            {/* Yellow in-progress banner — only if count > 0 */}
            {(inProgress ?? 0) > 0 && (
                <div className="px-4">
                    <button
                        onClick={() => router.push('/home/in-progress')}
                        className="w-full bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex items-center gap-3 hover:bg-yellow-100 transition active:scale-[0.99] text-left"
                    >
                        <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center shrink-0">
                            <MdBuild className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-yellow-800 text-sm">
                                У вас {inProgress} Тех обслужование в процессе
                            </p>
                            <p className="text-xs text-yellow-600 mt-0.5">Нажмите чтобы посмотреть</p>
                        </div>
                        <MdChevronRight className="w-5 h-5 text-yellow-400 shrink-0" />
                    </button>
                </div>
            )}
        </div>
    );
}

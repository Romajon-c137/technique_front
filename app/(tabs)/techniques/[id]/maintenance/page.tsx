'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { MdChevronLeft } from 'react-icons/md';
import { HeaderNav } from '@/components/HeaderNav';
import { MaintenanceCalendar } from '@/components/MaintenanceCalendar';
import { getMaintenancePlans, getMaintenanceInstances } from '@/lib/techniqueApi';
import type { MaintenanceInstance, MaintenancePlan } from '@/lib/techniqueApi';

type TabType = 'today' | 'schedule' | 'history';

// Local date string YYYY-MM-DD without timezone shift
const toLocalDateStr = (date: Date): string => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
};

export default function TechniqueMaintenancePage() {
    const params = useParams();
    const router = useRouter();
    const techniqueId = params.id as string;

    // Pending (due + overdue) tasks for "today" tab
    const [overdueTasks, setOverdueTasks] = useState<MaintenanceInstance[]>([]);
    const [todayTasks, setTodayTasks] = useState<MaintenanceInstance[]>([]);

    // All instances for calendar (all statuses)
    const [allInstances, setAllInstances] = useState<MaintenanceInstance[]>([]);

    // Plans for the schedule tab
    const [plans, setPlans] = useState<MaintenancePlan[]>([]);

    // History: done instances
    const [historyTasks, setHistoryTasks] = useState<MaintenanceInstance[]>([]);

    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<TabType>('today');

    // Calendar — selected date state
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedDateInstances, setSelectedDateInstances] = useState<MaintenanceInstance[]>([]);

    // Calendar — current month
    const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
    const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());

    const loadCalendarInstances = useCallback(async (year: number, month: number, autoSelectToday = false) => {
        try {
            const firstOfMonth = toLocalDateStr(new Date(year, month, 1));
            const lastOfMonth = toLocalDateStr(new Date(year, month + 1, 0));
            const allResponse = await getMaintenanceInstances({
                equipment: techniqueId,
                scheduled_date_after: firstOfMonth,
                scheduled_date_before: lastOfMonth,
            });
            const instances = allResponse?.results || [];
            setAllInstances(instances);

            // Auto-select today if requested and today has instances
            if (autoSelectToday) {
                const today = toLocalDateStr(new Date());
                const todayInstances = instances.filter(i => i.scheduled_date === today);
                if (todayInstances.length > 0) {
                    setSelectedDate(today);
                    setSelectedDateInstances(todayInstances);
                }
            }
        } catch (err) {
            console.error('Failed to load calendar instances:', err);
        }
    }, [techniqueId]);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);

            const today = toLocalDateStr(new Date());

            // 1. TODAY tab: only instances scheduled for today
            const [todayResponse, overdueResponse] = await Promise.all([
                getMaintenanceInstances({
                    equipment: techniqueId,
                    scheduled_date_after: today,
                    scheduled_date_before: today,
                }),
                getMaintenanceInstances({
                    equipment: techniqueId,
                    status: 'overdue',
                }),
            ]);
            const allTodayInstances = (todayResponse?.results ?? []).filter(
                t => t.status !== 'overdue'   // overdue with today's date go to overdue section
            );
            setOverdueTasks(overdueResponse?.results ?? []);
            setTodayTasks(allTodayInstances);

            // 2. Plans for schedule tab
            const plansResponse = await getMaintenancePlans({ equipment: techniqueId, is_active: true });
            setPlans(plansResponse?.results || []);

            // 3. History: only done, sorted by completion date desc
            const historyResponse = await getMaintenanceInstances({
                equipment: techniqueId,
                status: 'done',
                ordering: '-completed_at',
            });
            setHistoryTasks(historyResponse?.results || []);

        } catch (err) {
            console.error('Failed to load maintenance data:', err);
        } finally {
            setLoading(false);
        }
    }, [techniqueId]);

    // Initial load: data + current month calendar (auto-select today if has instances)
    useEffect(() => {
        loadData();
        loadCalendarInstances(calendarYear, calendarMonth, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadData, loadCalendarInstances]);

    // When a calendar date is clicked — find instances for that date
    const handleDateClick = (date: Date) => {
        const dateStr = toLocalDateStr(date);
        setSelectedDate(dateStr);
        const found = allInstances.filter(i => i.scheduled_date === dateStr);
        setSelectedDateInstances(found);
        setActiveTab('schedule');
    };

    // When calendar month changes — only reload calendar instances (no full reload)
    const handleMonthChange = (year: number, month: number) => {
        setCalendarYear(year);
        setCalendarMonth(month);
        setSelectedDate(null);
        setSelectedDateInstances([]);
        loadCalendarInstances(year, month);
    };

    const getResponsibleUser = () => {
        const first = overdueTasks[0] || todayTasks[0] || historyTasks[0];
        return first?.equipment?.responsible;
    };

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'done': return 'text-green-600 bg-green-100';
            case 'overdue': return 'text-red-600 bg-red-100';
            case 'in_progress': return 'text-blue-600 bg-blue-100';
            case 'due': return 'text-orange-600 bg-orange-100';
            case 'planned': return 'text-gray-600 bg-gray-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'done': return 'Выполнено';
            case 'overdue': return 'Просрочено';
            case 'in_progress': return 'В процессе';
            case 'due': return 'К выполнению';
            case 'planned': return 'Запланировано';
            case 'cancelled': return 'Отменено';
            default: return status;
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <p className="text-gray-600">Загрузка...</p>
            </div>
        );
    }

    const responsible = getResponsibleUser();

    return (
        <div className="min-h-screen bg-white relative pb-10">
            <HeaderNav title="Техобслуживание" />

            <div className="">
                {/* Tabs */}
                <div className="flex bg-gray-200 rounded-2xl p-1 mb-4">
                    {(['today', 'schedule', 'history'] as TabType[]).map((tab, idx) => {
                        const labels: Record<TabType, string> = {
                            today: 'На сегодня',
                            schedule: 'График',
                            history: 'История',
                        };
                        const allTabs: TabType[] = ['today', 'schedule', 'history'];
                        const isActive = activeTab === tab;
                        const prevTab = allTabs[idx - 1];
                        const showDivider = idx > 0 && !isActive && activeTab !== prevTab;

                        return (
                            <button
                                key={tab}
                                onClick={() => { setActiveTab(tab); setSelectedDate(null); }}
                                className={`relative flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${isActive
                                    ? 'bg-white text-dark-900 shadow-sm'
                                    : 'text-dark-100 hover:text-dark-300'
                                    }`}
                            >
                                {showDivider && (
                                    <span className="absolute left-0 top-[20%] h-[60%] w-px bg-gray-300" />
                                )}
                                {labels[tab]}
                            </button>
                        );
                    })}
                </div>

                {/* ── TODAY TAB ── */}
                {activeTab === 'today' && (
                    <div className="space-y-4">
                        {overdueTasks.length === 0 && todayTasks.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-4xl mb-3">✅</p>
                                <p className="text-gray-500 font-medium">Нет заданий на сегодня</p>
                                <p className="text-sm text-gray-400 mt-1">Все ТО выполнены</p>
                            </div>
                        )}

                        {/* Overdue */}
                        {overdueTasks.length > 0 && (
                            <div>
                                <h2 className="text-lg font-bold text-red-600 mb-3">⚠️ Просрочено</h2>
                                <div className="space-y-3">
                                    {overdueTasks.map((item) => (
                                        <div key={item.id} className="rounded-2xl p-4 bg-red-50 border-2 border-red-200">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-semibold text-dark">{item.plan_title}</h3>
                                                <span className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">
                                                    Просрочено
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-1">{item.plan_type_display}</p>
                                            <p className="text-xs text-red-500 mb-3">📅 {formatDate(item.scheduled_date)}</p>

                                            <ul className="mb-3 space-y-1">
                                                {item.task_states.map((task, idx) => (
                                                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-1">
                                                        <span>•</span>
                                                        <span>{task.title}</span>
                                                        {task.is_required && <span className="text-red-500">*</span>}
                                                    </li>
                                                ))}
                                            </ul>

                                            {item.progress && (
                                                <div className="mb-3">
                                                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                                                        <span>Прогресс</span>
                                                        <span>{item.progress.percentage}%</span>
                                                    </div>
                                                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-red-500 rounded-full transition-all"
                                                            style={{ width: `${item.progress.percentage}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            <button
                                                onClick={() => router.push(`/techniques/${techniqueId}/maintenance/${item.id}`)}
                                                className="w-full px-6 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition"
                                            >
                                                Сделать срочно
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Today */}
                        {todayTasks.length > 0 && (
                            <div>
                                <h2 className="text-lg font-bold text-dark mb-3">На сегодня</h2>
                                <div className="space-y-3 border-2 border-primary-100 rounded-2xl ">
                                    {todayTasks.map((item) => (
                                        <div key={item.id} className="bg-light-100 rounded-2xl p-4">
                                            <div className="flex items-start justify-between gap-2 mb-2">
                                                <h3 className="font-semibold text-dark">{item.plan_title}</h3>
                                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${getStatusColor(item.status)}`}>
                                                    {getStatusLabel(item.status)}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-3">{item.plan_type_display}</p>

                                            <ul className="mb-3 space-y-1">
                                                {item.task_states.map((task, idx) => (
                                                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-1">
                                                        <span>•</span>
                                                        <span>{task.title}</span>
                                                        {task.is_required && <span className="text-red-500">*</span>}
                                                    </li>
                                                ))}
                                            </ul>

                                            {item.progress && (
                                                <div className="mb-3">
                                                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                                                        <span>Прогресс</span>
                                                        <span>{item.progress.percentage}%</span>
                                                    </div>
                                                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-primary-500 rounded-full transition-all"
                                                            style={{ width: `${item.progress.percentage}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {item.status === 'done' ? (
                                                <div className="w-full px-4 py-3 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center gap-2">
                                                    <span className="text-green-600 font-medium text-sm">✅ Выполнено</span>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => router.push(`/techniques/${techniqueId}/maintenance/${item.id}`)}
                                                    className="w-full px-6 py-3 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition"
                                                >
                                                    {item.status === 'in_progress' ? 'Закончить' : 'Сделать'}
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* ── SCHEDULE TAB ── */}
                {activeTab === 'schedule' && (
                    <div>
                        <MaintenanceCalendar
                            plans={plans}
                            instances={allInstances}
                            selectedDate={selectedDate}
                            onDateClick={handleDateClick}
                            onMonthChange={handleMonthChange}
                        />

                        {/* Selected date panel */}
                        {selectedDate && (
                            <div className="mt-4">
                                <h3 className="text-base font-bold text-dark mb-3">
                                    📅 {formatDate(selectedDate)}
                                </h3>

                                {selectedDateInstances.length === 0 ? (
                                    <p className="text-gray-500 text-sm text-center py-6">Нет ТО на этот день</p>
                                ) : (
                                    <div className="space-y-3">
                                        {selectedDateInstances.map((item) => (
                                            <div
                                                key={item.id}
                                                className="bg-light-100 rounded-2xl p-4 cursor-pointer bg-primary-100 transition"
                                                onClick={() => router.push(`/techniques/${techniqueId}/maintenance/${item.id}`)}
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-semibold text-dark">{item.plan_title}</h4>
                                                    <span className={`text-xs font-semibold px-2 py-1 rounded ${getStatusColor(item.status)}`}>
                                                        {getStatusLabel(item.status)}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-3">{item.plan_type_display}</p>

                                                {item.progress && (
                                                    <div className="mb-3">
                                                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                                                            <span>Задачи: {item.progress.completed}/{item.progress.total}</span>
                                                            <span>{item.progress.percentage}%</span>
                                                        </div>
                                                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                            <div
                                                                className="h-full bg-primary-500 rounded-full"
                                                                style={{ width: `${item.progress.percentage}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                )}

                                                {(item.status === 'due' || item.status === 'overdue' || item.status === 'in_progress' || item.status === 'planned') && (
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            router.push(`/techniques/${techniqueId}/maintenance/${item.id}`);
                                                        }}
                                                        className={`w-full py-3 rounded-xl font-medium transition text-white ${item.status === 'overdue'
                                                            ? 'bg-red-500 hover:bg-red-600'
                                                            : 'bg-primary-500 hover:bg-primary-600'
                                                            }`}
                                                    >
                                                        {item.status === 'overdue' ? 'Сделать срочно' : 'Сделать'}
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {!selectedDate && (
                            <p className="text-center text-sm text-gray-400 mt-4">
                                Нажмите на день чтобы увидеть ТО
                            </p>
                        )}
                    </div>
                )}

                {/* ── HISTORY TAB ── */}
                {activeTab === 'history' && (
                    <div className="space-y-3">
                        {historyTasks.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-4xl mb-3">📋</p>
                                <p className="text-gray-500 font-medium">История пуста</p>
                                <p className="text-sm text-gray-400 mt-1">Выполненные ТО появятся здесь</p>
                            </div>
                        ) : (
                            historyTasks.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => router.push(`/techniques/${techniqueId}/maintenance/${item.id}`)}
                                    className="w-full text-left bg-light-100 hover:bg-gray-100 transition rounded-2xl p-4"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-semibold text-dark">{item.plan_title}</h3>
                                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded font-semibold">
                                            Выполнено
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-1">{item.plan_type_display}</p>
                                    <p className="text-xs text-gray-400">
                                        📅 {formatDate(item.completed_at || item.scheduled_date)}
                                    </p>
                                    {item.completed_by && (
                                        <p className="text-xs text-gray-400 mt-0.5">
                                            👤 {item.completed_by.full_name}
                                        </p>
                                    )}
                                    {item.progress && (
                                        <div className="mt-2">
                                            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-green-500 rounded-full"
                                                    style={{ width: `${item.progress.percentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </button>
                            ))
                        )}
                    </div>
                )}

                {/* Responsible link */}
                {responsible && (
                    <button
                        onClick={() => router.push(`/responsible/${responsible.id}`)}
                        className="absolute  bottom-0 left-0 w-full text-start text-sm text-dark-100 hover:text-primary-500 transition"
                    >
                        <span className="text-primary-500 font-medium underline underline-offset-2">
                            Ответственный:{' '}
                            {responsible.full_name}
                        </span>
                    </button>
                )}
            </div>
        </div>
    );
}

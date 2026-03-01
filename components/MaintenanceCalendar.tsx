'use client';

import { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import type { MaintenancePlan, MaintenanceInstance } from '@/lib/techniqueApi';

interface MaintenanceCalendarProps {
    plans?: MaintenancePlan[];
    instances?: MaintenanceInstance[];
    selectedDate?: string | null;
    onDateClick?: (date: Date) => void;
    onMonthChange?: (year: number, month: number) => void;
}

// Local date string YYYY-MM-DD (avoids timezone shift from toISOString)
const toLocalDateStr = (date: Date): string => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
};

export function MaintenanceCalendar({
    plans = [],
    instances = [],
    selectedDate,
    onDateClick,
    onMonthChange,
}: MaintenanceCalendarProps) {
    const now = new Date();
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth()); // 0-indexed

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Monday = 0
    const daysInMonth = lastDay.getDate();
    const totalCells = Math.ceil((daysInMonth + startingDayOfWeek) / 7) * 7;

    const monthName = new Date(year, month, 1).toLocaleDateString('ru-RU', {
        month: 'long',
        year: 'numeric',
    });

    const goToPrev = () => {
        const newDate = new Date(year, month - 1, 1);
        setYear(newDate.getFullYear());
        setMonth(newDate.getMonth());
        onMonthChange?.(newDate.getFullYear(), newDate.getMonth());
    };

    const goToNext = () => {
        const newDate = new Date(year, month + 1, 1);
        setYear(newDate.getFullYear());
        setMonth(newDate.getMonth());
        onMonthChange?.(newDate.getFullYear(), newDate.getMonth());
    };

    // Count instances per date for dot color logic
    const getInstancesOnDate = (date: Date): MaintenanceInstance[] => {
        const dateStr = toLocalDateStr(date);
        return instances.filter(i => i.scheduled_date === dateStr);
    };

    const getDotColor = (dayInstances: MaintenanceInstance[]): string | null => {
        if (dayInstances.length === 0) return null;
        if (dayInstances.some(i => i.status === 'overdue')) return 'bg-red-500';
        if (dayInstances.some(i => i.status === 'due' || i.status === 'in_progress')) return 'bg-orange-400';
        if (dayInstances.some(i => i.status === 'done')) return 'bg-green-500';
        return 'bg-primary-500'; // planned
    };

    const renderCell = (index: number) => {
        const dayNumber = index - startingDayOfWeek + 1;

        if (index < startingDayOfWeek || dayNumber > daysInMonth) {
            return <div key={index} className="aspect-square" />;
        }

        const cellDate = new Date(year, month, dayNumber);
        const cellDateStr = toLocalDateStr(cellDate);
        const dayInstances = getInstancesOnDate(cellDate);
        const dotColor = getDotColor(dayInstances);
        const today = new Date();
        const isToday =
            today.getDate() === dayNumber &&
            today.getMonth() === month &&
            today.getFullYear() === year;
        const isSelected = selectedDate === cellDateStr;

        return (
            <button
                key={index}
                onClick={() => onDateClick?.(cellDate)}
                className={`aspect-square rounded-lg flex flex-col items-center justify-center relative transition
                    ${isSelected
                        ? 'bg-primary-200'
                        : isToday
                            ? 'bg-primary-100'
                            : 'hover:bg-gray-100'
                    }
                    ${dayInstances.length > 0 ? 'cursor-pointer' : ''}
                `}
            >
                <span className={`text-sm ${isSelected || isToday ? 'text-primary-600 font-bold' : 'text-gray-700'
                    }`}>
                    {dayNumber}
                </span>
                {dotColor && (
                    <div className={`w-1.5 h-1.5 rounded-full mt-0.5 ${dotColor}`} />
                )}
            </button>
        );
    };

    return (
        <div className="bg-white rounded-2xl p-4">
            {/* Header with navigation */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={goToPrev}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
                >
                    <MdChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <h3 className="font-semibold text-dark capitalize">{monthName}</h3>
                <button
                    onClick={goToNext}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
                >
                    <MdChevronRight className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            {/* Day labels */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
                    <div key={day} className="text-center text-xs text-gray-400 font-medium py-1">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: totalCells }, (_, i) => renderCell(i))}
            </div>

            {/* Legend */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-3 text-xs">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    <span className="text-gray-500">Запланировано</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    <span className="text-gray-500">К выполнению</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-gray-500">Просрочено</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-gray-500">Выполнено</span>
                </div>
            </div>
        </div>
    );
}

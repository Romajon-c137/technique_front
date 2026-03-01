'use client';

import { HeaderNav } from '@/components/HeaderNav';
import { IoCheckmarkCircle } from 'react-icons/io5';

const FEATURES = [
    'Управление списком техники',
    'Планирование и контроль ТО',
    'Уведомления о предстоящих работах',
    'История выполненных обслуживаний',
    'QR-сканирование техники',
    'Фото-отчёты по выполненным работам',
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <HeaderNav title="О приложении" />

            <div className="px-4 pt-8 pb-12 space-y-8">

                {/* Logo & Title */}
                <div className="flex flex-col items-center gap-3">
                    <div className="w-24 h-24 rounded-3xl bg-primary-500 flex items-center justify-center shadow-xl shadow-primary-200">
                        {/* Place app-logo.png in /public/ */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/app-logo.png"
                            alt="Logo"
                            className="w-16 h-16 object-contain"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-dark">Akfa Technique</h2>
                        <p className="text-sm text-gray-400 mt-0.5">Система управления техобслуживанием</p>
                    </div>
                    <span className="px-4 py-1 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full border border-primary-100">
                        Версия 1.0.0
                    </span>
                </div>

                {/* Description */}
                <div className="bg-gray-50 rounded-3xl p-5">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Akfa Technique — мобильное приложение для инженеров и менеджеров, которое упрощает контроль
                        за техническим обслуживанием оборудования. Следите за состоянием техники,
                        выполняйте ТО вовремя и не упускайте ни одной задачи.
                    </p>
                </div>

                {/* Features */}
                <div>
                    <h3 className="text-base font-bold text-dark mb-3">Возможности</h3>
                    <div className="space-y-3">
                        {FEATURES.map((f, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <IoCheckmarkCircle className="w-5 h-5 text-primary-500 shrink-0" />
                                <span className="text-sm text-gray-700">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100" />

                {/* Dev info */}
                <div className="space-y-2 text-center">
                    <p className="text-xs text-gray-400">Разработано</p>
                    <p className="text-sm font-semibold text-dark">Mr. Bilol</p>
                    <p className="text-xs text-gray-400">© 2026 Akfa Technique. Все права защищены.</p>
                </div>
            </div>
        </div>
    );
}

'use client';

import { useState } from 'react';
import { HeaderNav } from '@/components/HeaderNav';
import {
    IoLogoWhatsapp,
    IoChevronDown,
    IoChevronUp,
    IoChatbubbleEllipses,
} from 'react-icons/io5';

const WHATSAPP_PHONE = '+996550998609';
const TELEGRAM_HANDLE = 'roma_c137';

const FAQ = [
    {
        q: 'Как добавить новую технику?',
        a: 'Обратитесь к администратору системы — только администраторы могут добавлять технику через панель управления.',
    },
    {
        q: 'Почему мне не приходят уведомления?',
        a: 'Убедитесь, что вы назначены ответственным за технику. Уведомления приходят за день до ТО и в день просрочки.',
    },
    {
        q: 'Как сбросить пароль?',
        a: 'Перейдите в Профиль → Личные данные → Сменить пароль. Если не помните текущий — обратитесь к администратору.',
    },
    {
        q: 'Где посмотреть историю выполненных ТО?',
        a: 'Профиль → История обслуживания. Там отображаются все завершённые работы по вашим техникам.',
    },
];

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <button
            onClick={() => setOpen(v => !v)}
            className="w-full text-left bg-gray-50 rounded-2xl px-4 py-3.5 transition"
        >
            <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-dark">{q}</span>
                {open ? (
                    <IoChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                ) : (
                    <IoChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                )}
            </div>
            {open && (
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{a}</p>
            )}
        </button>
    );
}

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-white">
            <HeaderNav title="Поддержка" />

            <div className="px-4 pt-6 pb-12 space-y-8">

                {/* Hero */}
                <div className="text-center space-y-1">
                    <div className="flex justify-center mb-3">
                        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
                            <IoChatbubbleEllipses className="w-8 h-8 text-primary-500" />
                        </div>
                    </div>
                    <h2 className="text-lg font-bold text-dark">Нужна помощь?</h2>
                    <p className="text-sm text-gray-500">Не каждый с первого раза понимает приложения</p>
                </div>

                {/* Developer card */}
                <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-5 flex items-center gap-4 border border-primary-100">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-200 shrink-0">
                        {/* Place support-avatar.jpg in /public/ */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/support-avatar.jpg"
                            alt="Mr.Bilol"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                    </div>
                    <div>
                        <p className="font-bold text-dark text-base">Mr. Bilol</p>
                        <p className="text-xs text-gray-400 mt-0.5">Главный разработчик</p>
                        <p className="text-sm text-gray-600 mt-2 leading-snug">
                            По всем вопросам касаемо приложения — пишите напрямую.
                            Отвечу быстро! 🚀
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <a
                        href={`https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-green-500 text-white font-semibold text-sm shadow-md shadow-green-200 hover:bg-green-600 active:scale-95 transition"
                    >
                        <IoLogoWhatsapp className="w-5 h-5" />
                        WhatsApp
                    </a>
                    <a
                        href={`https://t.me/${TELEGRAM_HANDLE}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-sky-500 text-white font-semibold text-sm shadow-md shadow-sky-200 hover:bg-sky-600 active:scale-95 transition"
                    >
                        Telegram
                    </a>
                </div>

                {/* FAQ */}
                <div>
                    <h3 className="text-base font-bold text-dark mb-3">Частые вопросы</h3>
                    <div className="space-y-2">
                        {FAQ.map((item, i) => (
                            <FaqItem key={i} q={item.q} a={item.a} />
                        ))}
                    </div>
                </div>

                {/* Footer note */}
                <p className="text-center text-xs text-gray-300">
                    Akfa Technique · Техподдержка
                </p>
            </div>
        </div>
    );
}

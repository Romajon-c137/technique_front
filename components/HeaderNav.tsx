"use client";

import { useRouter } from 'next/navigation';

interface HeaderNavProps {
    title: string;
    onBack?: () => void;
}

export function HeaderNav({ title, onBack }: HeaderNavProps) {
    const router = useRouter();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            router.back();
        }
    };

    return (
        <header className="h-14 flex items-center justify-center relative bg-white ">
            {/* Back Button */}
            <button
                onClick={handleBack}
                className="absolute left-0 h-full  flex items-center justify-center text-primary-500 hover:text-primary-400 transition-colors"
                aria-label="Назад"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* Title */}
            <h4 className="text-dark-900">{title}</h4>
        </header>
    );
}

"use client";

import Link from 'next/link';
import { ReactNode } from 'react';

interface MenuItemProps {
    icon?: ReactNode;
    text: string;
    href?: string;
    onClick?: () => void;
}

export function MenuItem({ icon, text, href, onClick }: MenuItemProps) {
    const content = (
        <div className="flex items-center gap-4 py-4 px-0 border-b border-gray-300">
            {/* Left Icon (optional) */}
            {icon && (
                <div className="shrink-0 w-6 h-6 flex items-center justify-center text-primary-500">
                    {icon}
                </div>
            )}

            {/* Text */}
            <span className="body-m text-dark-900 flex-1">{text}</span>

            {/* Right Arrow Icon */}
            <div className="shrink-0 text-dark-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block hover:bg-gray-200 transition-colors">
                {content}
            </Link>
        );
    }

    if (onClick) {
        return (
            <button onClick={onClick} className="w-full text-left hover:bg-gray-200 transition-colors">
                {content}
            </button>
        );
    }

    return <div className="cursor-default">{content}</div>;
}

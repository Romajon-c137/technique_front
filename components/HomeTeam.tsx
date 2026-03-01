'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MdChevronRight, MdPerson } from 'react-icons/md';
import { getUsers } from '@/lib/techniqueApi';

interface User {
    id: string | number;
    full_name: string;
    avatar: string | null;
    role: string;
}

const ROLE_LABELS: Record<string, string> = {
    admin: 'Администратор',
    engineer: 'Инженер',
    technician: 'Техник',
    manager: 'Менеджер',
    worker: 'Рабочий',
};

export default function HomeTeam() {
    const router = useRouter();
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers()
            .then(data => {
                const list = (data as any)?.results ?? data ?? [];
                setUsers(Array.isArray(list) ? list.slice(0, 20) : []);
            })
            .catch(console.error);
    }, []);

    if (users.length === 0) return null;

    return (
        <div className="mt-6">
            {/* Header */}
            <div className="flex items-center justify-between px-4 mb-3">
                <h2 className="text-base font-bold text-gray-800">Люди на заводе</h2>
                <button
                    onClick={() => router.push('/home/team')}
                    className="flex items-center gap-0.5 text-primary-500 text-xs font-medium"
                >
                    Смотреть все <MdChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Horizontal slider */}
            <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide snap-x snap-mandatory">
                {users.map(user => (
                    <button
                        key={user.id}
                        onClick={() => router.push(`/responsible/${user.id}`)}
                        className="flex flex-col items-center gap-1.5 snap-start shrink-0 w-20 active:scale-95 transition"
                    >
                        {/* Avatar */}
                        <div className="w-16 h-16 rounded-full bg-primary-100 overflow-hidden flex items-center justify-center shrink-0">
                            {user.avatar ? (
                                <Image
                                    src={user.avatar}
                                    alt={user.full_name}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                    unoptimized
                                />
                            ) : (
                                <MdPerson className="w-8 h-8 text-primary-400" />
                            )}
                        </div>
                        {/* Name - fixed height so role aligns across all cards */}
                        <p className="text-[11px] font-semibold text-gray-800 text-center leading-tight line-clamp-2 w-full h-8 flex items-start justify-center">
                            {user.full_name || '—'}
                        </p>
                        {/* Role */}
                        <p className="text-[10px] text-gray-400 text-center leading-tight">
                            {ROLE_LABELS[user.role] ?? user.role ?? ''}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdPerson } from 'react-icons/md';
import { HeaderNav } from '@/components/HeaderNav';
import { getUsers } from '@/lib/techniqueApi';

interface User {
    id: string | number;
    full_name: string;
    avatar: string | null;
    role: string;
    phone: string;
}

const ROLE_LABELS: Record<string, string> = {
    admin: 'Администратор',
    engineer: 'Инженер',
    technician: 'Техник',
    manager: 'Менеджер',
    worker: 'Рабочий',
};

export default function TeamPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers()
            .then(data => {
                const list = (data as any)?.results ?? data ?? [];
                setUsers(Array.isArray(list) ? list : []);
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <HeaderNav title="Люди на заводе" />

            <div className="px-4 pt-4 pb-12">
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <p className="text-gray-400">Загрузка...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-4">
                        {users.map(user => (
                            <div key={user.id} className="flex flex-col items-center gap-2">
                                {/* Avatar */}
                                <div className="w-20 h-20 rounded-full bg-primary-100 overflow-hidden flex items-center justify-center">
                                    {user.avatar ? (
                                        <Image
                                            src={user.avatar}
                                            alt={user.full_name}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-cover"
                                            unoptimized
                                        />
                                    ) : (
                                        <MdPerson className="w-10 h-10 text-primary-400" />
                                    )}
                                </div>
                                {/* Name */}
                                <p className="text-xs font-semibold text-gray-800 text-center leading-tight line-clamp-2">
                                    {user.full_name || '—'}
                                </p>
                                {/* Role */}
                                <span className="text-[10px] bg-primary-50 text-primary-500 font-medium px-2 py-0.5 rounded-full text-center">
                                    {ROLE_LABELS[user.role] ?? user.role ?? ''}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

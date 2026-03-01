"use client";

import { useAuth } from "@/contexts/AuthContext";
import { MenuItem } from "@/components/MenuItem";
import { HeaderNav } from "@/components/HeaderNav";
import { IoSettings, IoTime, IoNotifications, IoPerson, IoChatbubble, IoInformationCircle, IoLogOut, IoCamera } from "react-icons/io5";

// Helper function to get full URL for avatar
const getAvatarUrl = (avatar?: string) => {
    if (!avatar) return null;
    // Backend now always returns absolute URL
    return avatar;
};

export default function Page() {
    const { user, logout } = useAuth();
    const avatarUrl = getAvatarUrl(user?.avatar);

    return (
        <div className="min-h-screen bg-white flex flex-col p-4">
            <HeaderNav title="Профиль" />

            {/* Profile Header Section */}
            <div className="py-8 px-4 flex flex-col items-center border-b border-gray-300">
                {/* Avatar with Edit Button */}
                <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center overflow-hidden">
                        {user?.avatar && avatarUrl ? (
                            <img
                                src={avatarUrl}
                                alt={user?.full_name || 'User'}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-primary-500">
                                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </div>
                    {/* Edit Icon */}
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                        <IoCamera size={16} className="text-white" />
                    </button>
                </div>

                {/* User Info */}
                <h2 className="text-dark-900 mb-1 text-center">{user?.full_name || 'Пользователь'}</h2>
                <p className="body-m text-dark-100 text-center">{user?.phone || 'phone'}</p>
            </div>

            {/* Menu Items */}
            <div className="flex-1">
                <MenuItem
                    icon={<IoPerson size={24} />}
                    text="Личные данные"
                    href="/profile/personal-data"
                />
                <MenuItem
                    icon={<IoSettings size={24} />}
                    text="Мои техники"
                    href={user?.id ? `/techniques?responsible=${user.id}` : '/techniques'}
                />
                <MenuItem
                    icon={<IoTime size={24} />}
                    text="История обслуживания"
                    href="/profile/history"
                />
                <MenuItem
                    icon={<IoNotifications size={24} />}
                    text="Уведомления"
                    href="/home/notifications"
                />
                <MenuItem
                    icon={<IoChatbubble size={24} />}
                    text="Поддержка"
                    href="/profile/support"
                />
                <MenuItem
                    icon={<IoInformationCircle size={24} />}
                    text="О приложении"
                    href="/profile/about"
                />
            </div>

            {/* Logout Button */}
            <div className="p-4">
                <button
                    onClick={logout}
                    className="w-full py-3 px-4 rounded-lg border-2 border-error-500 text-error-500 font-semibold flex items-center justify-center gap-2 hover:bg-error-50 transition-colors"
                >
                    <span>Log out</span>
                    <IoLogOut size={20} />
                </button>
            </div>

            {/* Version */}
            <div className="py-4 px-4 flex justify-between items-center border-t border-gray-300">
                <span className="caption text-dark-100">версия</span>
                <span className="caption text-dark-100">0.0.1</span>
            </div>
        </div>
    );
}

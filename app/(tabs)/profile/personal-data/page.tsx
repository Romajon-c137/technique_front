'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { MdArrowBack, MdEdit, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useAuth } from '@/contexts/AuthContext';
import { updateProfile, changePassword } from '@/lib/api';

const ROLE_LABELS: Record<string, string> = {
    admin: 'Администратор',
    engineer: 'Инженер',
    manager: 'Менеджер',
};

export default function PersonalDataPage() {
    const { user, updateUser } = useAuth();
    const router = useRouter();
    const fileRef = useRef<HTMLInputElement>(null);

    const [fullName, setFullName] = useState(user?.full_name ?? '');
    const [phone, setPhone] = useState(user?.phone ?? '');
    const [birthDate, setBirthDate] = useState(user?.birth_date ?? '');
    const [avatarPreview, setAvatarPreview] = useState<string | null>(user?.avatar ?? null);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);

    const [saving, setSaving] = useState(false);
    const [saveError, setSaveError] = useState('');
    const [saveSuccess, setSaveSuccess] = useState(false);

    // Password section
    const [showPwd, setShowPwd] = useState(false);
    const [changingPwd, setChangingPwd] = useState(false);
    const [newPwd, setNewPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [pwdError, setPwdError] = useState('');
    const [pwdSuccess, setPwdSuccess] = useState(false);
    const [pwdSaving, setPwdSaving] = useState(false);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setAvatarFile(file);
        setAvatarPreview(URL.createObjectURL(file));
    };

    const handleSave = async () => {
        setSaving(true);
        setSaveError('');
        setSaveSuccess(false);
        try {
            const updated = await updateProfile({
                full_name: fullName,
                phone,
                birth_date: birthDate || undefined,
                avatar: avatarFile ?? undefined,
            });
            updateUser(updated as any);
            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 2500);
        } catch (err: any) {
            setSaveError(err.message || 'Ошибка сохранения');
        } finally {
            setSaving(false);
        }
    };

    const handleChangePwd = async () => {
        setPwdError('');
        if (newPwd !== confirmPwd) { setPwdError('Пароли не совпадают'); return; }
        if (newPwd.length < 8) { setPwdError('Минимум 8 символов'); return; }
        setPwdSaving(true);
        try {
            await changePassword({ new_password: newPwd, new_password_confirm: confirmPwd });
            setPwdSuccess(true);
            setChangingPwd(false);
            setNewPwd('');
            setConfirmPwd('');
            setTimeout(() => setPwdSuccess(false), 3000);
        } catch (err: any) {
            setPwdError(err.message || 'Ошибка');
        } finally {
            setPwdSaving(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="flex items-center gap-3 px-4 pt-4 pb-3 border-b border-gray-100">
                <button
                    onClick={() => router.back()}
                    className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
                >
                    <MdArrowBack className="w-6 h-6 text-gray-600" />
                </button>
                <h1 className="text-lg font-bold text-dark">Редактирование профиля</h1>
            </div>

            <div className="px-4 pt-6 pb-10 space-y-6">
                {/* Avatar */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-primary-100 overflow-hidden">
                            {avatarPreview ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={avatarPreview} alt="Аватар" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-primary-400">
                                        <path d="M12 12C14.76 12 17 9.76 17 7C17 4.24 14.76 2 12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12Z" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => fileRef.current?.click()}
                            className="absolute bottom-0 right-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center shadow-md"
                        >
                            <MdEdit className="w-4 h-4 text-white" />
                        </button>
                        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                    </div>
                </div>

                {/* Fields */}
                <div className="space-y-4">
                    {/* ФИО */}
                    <div>
                        <label className="text-sm text-gray-600 mb-1.5 block">ФИО</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-2xl border border-primary-200 text-sm text-dark outline-none focus:border-primary-400 transition"
                            placeholder="Иванов Иван Иванович"
                        />
                    </div>

                    {/* Телефон */}
                    <div>
                        <label className="text-sm text-gray-600 mb-1.5 block">Телефон</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-2xl border border-primary-200 text-sm text-dark outline-none focus:border-primary-400 transition"
                            placeholder="+996 000 00 00 00"
                        />
                    </div>

                    {/* Дата рождения */}
                    <div>
                        <label className="text-sm text-gray-600 mb-1.5 block">Дата рождения</label>
                        <input
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-2xl border border-primary-200 text-sm text-dark outline-none focus:border-primary-400 transition"
                        />
                    </div>

                    {/* Роль — readonly */}
                    <div>
                        <label className="text-sm text-gray-600 mb-1.5 block">Роль</label>
                        <div className="w-full px-4 py-3.5 rounded-2xl bg-gray-100 border border-gray-100 text-sm text-gray-600">
                            {ROLE_LABELS[user?.role ?? ''] ?? user?.role ?? '—'}
                        </div>
                    </div>

                    {/* Пароль */}
                    <div>
                        <label className="text-sm text-gray-600 mb-1.5 block">Пароль</label>
                        <div className="relative">
                            <input
                                type={showPwd ? 'text' : 'password'}
                                value="••••••••"
                                readOnly
                                className="w-full px-4 py-3.5 rounded-2xl border border-primary-200 text-sm text-dark outline-none bg-white"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPwd(v => !v)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                                {showPwd ? <MdVisibilityOff className="w-5 h-5" /> : <MdVisibility className="w-5 h-5" />}
                            </button>
                        </div>
                        <button
                            onClick={() => setChangingPwd(v => !v)}
                            className="mt-2 text-sm text-primary-500 font-medium"
                        >
                            Сменить пароль
                        </button>

                        {/* Change password form */}
                        {changingPwd && (
                            <div className="mt-3 space-y-3 p-4 bg-gray-50 rounded-2xl">
                                <input
                                    type="password"
                                    value={newPwd}
                                    onChange={(e) => setNewPwd(e.target.value)}
                                    placeholder="Новый пароль"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-primary-400 transition"
                                />
                                <input
                                    type="password"
                                    value={confirmPwd}
                                    onChange={(e) => setConfirmPwd(e.target.value)}
                                    placeholder="Повторите пароль"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-primary-400 transition"
                                />
                                {pwdError && <p className="text-xs text-red-500">{pwdError}</p>}
                                {pwdSuccess && <p className="text-xs text-green-600">✅ Пароль изменён</p>}
                                <button
                                    onClick={handleChangePwd}
                                    disabled={pwdSaving}
                                    className="w-full py-3 rounded-xl bg-primary-500 text-white font-semibold text-sm disabled:opacity-50"
                                >
                                    {pwdSaving ? 'Сохранение...' : 'Сохранить пароль'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Errors & Success */}
                {saveError && <p className="text-sm text-red-500 text-center">{saveError}</p>}
                {saveSuccess && <p className="text-sm text-green-600 text-center">✅ Профиль сохранён</p>}

                {/* Save button */}
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="w-full py-4 rounded-2xl bg-primary-500 text-white font-bold text-base hover:bg-primary-600 transition active:scale-[0.99] disabled:opacity-50"
                >
                    {saving ? 'Сохранение...' : 'Сохранить'}
                </button>
            </div>
        </div>
    );
}

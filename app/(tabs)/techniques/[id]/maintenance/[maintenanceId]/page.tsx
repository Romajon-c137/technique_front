'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { MdCheckCircle, MdImage, MdDeleteOutline } from 'react-icons/md';
import { HeaderNav } from '@/components/HeaderNav';
import {
    getMaintenanceInstance,
    startMaintenance,
    updateMaintenanceTasks,
    uploadMaintenancePhoto,
    completeMaintenance,
    deleteMaintenancePhoto,
} from '@/lib/techniqueApi';
import type { MaintenanceInstance, TaskState } from '@/lib/techniqueApi';

export default function MaintenanceExecutionPage() {
    const params = useParams();
    const router = useRouter();
    const [maintenance, setMaintenance] = useState<MaintenanceInstance | null>(null);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [completing, setCompleting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    const maintenanceId = params.maintenanceId as string;
    const techniqueId = params.id as string;

    const isReadOnly = maintenance?.status === 'done' || maintenance?.status === 'cancelled';

    useEffect(() => {
        loadMaintenance();
    }, [maintenanceId]);

    const loadMaintenance = async () => {
        try {
            setLoading(true);
            const data = await getMaintenanceInstance(maintenanceId);
            setMaintenance(data);

            // Auto-start if status is planned/due/overdue
            if (data.status === 'planned' || data.status === 'due' || data.status === 'overdue') {
                try {
                    const started = await startMaintenance(maintenanceId);
                    setMaintenance(started);
                } catch {
                    // If already started or error, continue with existing data
                }
            }
        } catch (err) {
            console.error('Failed to load maintenance:', err);
        } finally {
            setLoading(false);
        }
    };

    const toggleTask = async (taskIndex: number) => {
        if (!maintenance || isReadOnly) return;

        const task = maintenance.task_states[taskIndex];
        const newStatus = task.status === 'done' ? 'pending' : 'done';

        const updatedTasks: TaskState[] = maintenance.task_states.map((t, idx) => {
            if (idx === taskIndex) {
                return {
                    ...t,
                    status: newStatus,
                    checked_at: newStatus === 'done' ? new Date().toISOString() : undefined,
                };
            }
            return t;
        });

        // Optimistically update UI immediately (keeps photos intact)
        setMaintenance(prev => prev ? { ...prev, task_states: updatedTasks } : prev);

        try {
            const updated = await updateMaintenanceTasks(maintenanceId, updatedTasks);
            // Merge server response — preserve existing photos if server omits them
            setMaintenance(prev => prev ? {
                ...updated,
                photos: updated.photos?.length ? updated.photos : prev.photos,
            } : updated);
        } catch (err) {
            console.error('Failed to update task:', err);
            // Rollback on error
            setMaintenance(prev => prev ? { ...prev, task_states: maintenance.task_states } : prev);
            alert('Ошибка при обновлении задачи');
        }
    };

    const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !maintenance || isReadOnly) return;

        try {
            setUploading(true);
            await uploadMaintenancePhoto(maintenanceId, file);
            await loadMaintenance();
        } catch (err) {
            console.error('Failed to upload photo:', err);
            alert('Ошибка при загрузке фото');
        } finally {
            setUploading(false);
            // Reset input
            e.target.value = '';
        }
    };

    const handleDeletePhoto = async (photoId: string) => {
        if (!maintenance || isReadOnly) return;
        try {
            await deleteMaintenancePhoto(maintenanceId, photoId);
            await loadMaintenance();
        } catch {
            alert('Ошибка при удалении фото');
        }
    };

    const handleComplete = async () => {
        if (!maintenance) return;

        const allRequiredDone = maintenance.task_states
            .filter(t => t.is_required)
            .every(t => t.status === 'done');

        if (!allRequiredDone) {
            alert('Выполните все обязательные задачи (отмечены *)');
            return;
        }

        if (!maintenance.photos || maintenance.photos.length === 0) {
            alert('Загрузите минимум 1 фото');
            return;
        }

        try {
            setCompleting(true);
            await completeMaintenance(maintenanceId);
            setShowSuccessModal(true);
        } catch (err) {
            console.error('Failed to complete maintenance:', err);
            alert('Ошибка при завершении ТО');
        } finally {
            setCompleting(false);
        }
    };

    const handleSuccessOk = () => {
        setShowSuccessModal(false);
        router.push(`/techniques/${techniqueId}/maintenance`);
    };

    const calculateProgress = () => {
        if (!maintenance) return 0;
        const completed = maintenance.task_states.filter(t => t.status === 'done').length;
        const total = maintenance.task_states.length;
        return total > 0 ? (completed / total) * 100 : 0;
    };

    const canComplete = () => {
        if (!maintenance) return false;
        const allRequiredDone = maintenance.task_states
            .filter(t => t.is_required)
            .every(t => t.status === 'done');
        return allRequiredDone && (maintenance.photos?.length || 0) >= 1;
    };

    const formatDate = (dateStr?: string) => {
        if (!dateStr) return '—';
        return new Date(dateStr).toLocaleDateString('ru-RU', {
            day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
        });
    };

    if (loading || !maintenance) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <p className="text-gray-600">Загрузка...</p>
            </div>
        );
    }

    const progress = calculateProgress();

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header with Progress */}
            <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
                <HeaderNav title={maintenance.plan.title} />

                {/* Progress Bar */}
                <div className="px-4 pb-3">
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex justify-between mt-1">
                        <p className="text-xs text-gray-500">
                            {maintenance.task_states.filter(t => t.status === 'done').length}/{maintenance.task_states.length} задач
                        </p>
                        <p className="text-xs text-gray-500">{Math.round(progress)}%</p>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                {/* Done / Info banner */}
                {isReadOnly && (
                    <div className={`rounded-2xl p-4 mb-4 ${maintenance.status === 'done' ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
                        <p className={`font-semibold ${maintenance.status === 'done' ? 'text-green-700' : 'text-gray-600'}`}>
                            {maintenance.status === 'done' ? '✅ ТО выполнено' : '❌ ТО отменено'}
                        </p>
                        {maintenance.completed_at && (
                            <p className="text-sm text-gray-500 mt-1">
                                📅 {formatDate(maintenance.completed_at)}
                            </p>
                        )}
                        {maintenance.completed_by && (
                            <p className="text-sm text-gray-500 mt-0.5">
                                👤 {maintenance.completed_by.full_name}
                            </p>
                        )}
                    </div>
                )}

                {/* Plan info */}
                <div className="mb-4">
                    <p className="text-sm text-gray-400">{maintenance.plan_type_display}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                        📅 Запланировано: {formatDate(maintenance.scheduled_date)}
                    </p>
                    {maintenance.assigned_to && (
                        <p className="text-xs text-gray-400 mt-0.5">
                            👤 Исполнитель: {maintenance.assigned_to.full_name}
                        </p>
                    )}
                </div>

                {/* Tasks List */}
                <h2 className="text-base font-bold text-dark mb-3">Задачи</h2>
                <div className="space-y-2 mb-6">
                    {maintenance.task_states.map((task, index) => (
                        <button
                            key={index}
                            onClick={() => toggleTask(index)}
                            disabled={isReadOnly}
                            className={`w-full flex items-center justify-between p-4 rounded-2xl transition ${task.status === 'done'
                                ? 'bg-primary-100'
                                : 'bg-white border border-gray-200'
                                } ${isReadOnly ? 'cursor-default' : 'active:scale-[0.99]'}`}
                        >
                            <div className="flex items-center gap-3 text-left flex-1 min-w-0">
                                <span className="text-dark font-medium text-sm leading-snug">{task.title}</span>
                                {task.is_required && (
                                    <span className="text-red-500 text-xs shrink-0">*</span>
                                )}
                            </div>
                            {task.status === 'done' ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 ml-2">
                                    <rect width="24" height="24" rx="4" fill="#006FFD" />
                                    <path d="M7 12.5L10.5 16L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <div className="w-6 h-6 border-2 border-gray-300 rounded-[4px] shrink-0 ml-2" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Photo Upload Section */}
                <h2 className="text-base font-bold text-dark mb-3">Фото-отчёт</h2>
                {!isReadOnly && (
                    <label className="block mb-3">
                        <div className="border-2 border-dashed border-primary-200 bg-primary-50 rounded-2xl p-6 text-center cursor-pointer hover:bg-primary-100 transition">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                                className="hidden"
                                disabled={uploading}
                            />
                            <MdImage className="w-10 h-10 text-primary-400 mx-auto mb-2" />
                            <p className="text-sm text-dark font-medium">
                                {uploading ? 'Загрузка...' : 'Добавить фото'}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">Обязательно минимум 1 фото</p>
                        </div>
                    </label>
                )}

                {/* Photos grid */}
                {maintenance.photos && maintenance.photos.length > 0 ? (
                    <div className="grid grid-cols-3 gap-2 mb-6">
                        {maintenance.photos.map((photo) => (
                            <div key={photo.id} className="relative aspect-square rounded-xl overflow-hidden group">
                                {/* Click to open lightbox */}
                                <button
                                    onClick={() => setSelectedPhoto(photo.image)}
                                    className="w-full h-full"
                                >
                                    <Image
                                        src={photo.image}
                                        alt="Отчёт"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </button>
                                {!isReadOnly && (
                                    <button
                                        onClick={() => handleDeletePhoto(photo.id)}
                                        className="absolute top-1 right-1 w-7 h-7 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                                    >
                                        <MdDeleteOutline className="w-4 h-4 text-white" />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-4 mb-6 text-gray-400 text-sm">
                        {isReadOnly ? 'Фотографии не загружены' : 'Нет загруженных фото'}
                    </div>
                )}
            </div>

            {/* Complete Button — only if not read-only */}
            {!isReadOnly && (
                <div className="sticky bottom-0 p-4 bg-white border-t border-gray-200">
                    <button
                        onClick={handleComplete}
                        disabled={!canComplete() || completing}
                        className={`w-full py-4 rounded-xl font-semibold transition ${canComplete() && !completing
                            ? 'bg-primary-500 text-white hover:bg-primary-600 active:scale-[0.99]'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        {completing ? 'Отправка...' : 'Завершить ТО'}
                    </button>
                    {!canComplete() && (
                        <p className="text-xs text-center text-gray-400 mt-2">
                            {maintenance.task_states.some(t => t.is_required && t.status !== 'done')
                                ? 'Выполните все обязательные задачи'
                                : 'Загрузите минимум 1 фото'}
                        </p>
                    )}
                </div>
            )}

            {/* ── Success Modal ── */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-8">
                    {/* Blurred backdrop */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

                    {/* Dialog */}
                    <div className="relative bg-white rounded-3xl shadow-2xl px-8 py-8 w-full max-w-sm flex flex-col items-center text-center">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-5">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M5 13L9 17L19 7" stroke="#006FFD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <h2 className="text-dark-900 mb-2">Успешно !</h2>
                        <p className="body-m text-dark-100 mb-6">
                            Техническое обслуживание успешно завершено и сохранено.
                        </p>

                        <button
                            onClick={handleSuccessOk}
                            className="w-full py-4 bg-primary-500 hover:bg-primary-600 active:scale-[0.98] text-white font-semibold rounded-2xl transition"
                        >
                            Ок
                        </button>
                    </div>
                </div>
            )}

            {/* ── Photo Lightbox Modal ── */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center px-6"
                    onClick={() => setSelectedPhoto(null)}
                >
                    {/* Blurred backdrop */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                    {/* Photo card */}
                    <div
                        className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </button>

                        {/* Image */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={selectedPhoto}
                            alt="Фото отчёт"
                            className="w-full max-h-[80vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

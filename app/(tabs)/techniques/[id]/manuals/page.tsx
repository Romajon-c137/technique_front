'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { getTechniqueById } from '@/lib/techniqueApi';
import type { TechniqueItem } from '@/types/technique';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';
import { HeaderNav } from "@/components/HeaderNav";

export default function ManualsPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [technique, setTechnique] = useState<TechniqueItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [openAccordions, setOpenAccordions] = useState<number[]>([]);

    useEffect(() => {
        const loadTechnique = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await getTechniqueById(Number(id));
                setTechnique(data);

                // Открываем первые два аккордеона по умолчанию
                if (data.hints.length > 0) {
                    setOpenAccordions([data.hints[0]?.id, data.hints[1]?.id].filter(Boolean));
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Ошибка загрузки');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            loadTechnique();
        }
    }, [id]);

    const toggleAccordion = (hintId: number) => {
        setOpenAccordions(prev =>
            prev.includes(hintId)
                ? prev.filter(id => id !== hintId)
                : [...prev, hintId]
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600">Загрузка...</p>
            </div>
        );
    }

    if (error || !technique) {
        return (
            <div className="min-h-screen p-4">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <p>{error || 'Техника не найдена'}</p>
                </div>
            </div>
        );
    }

    const avatarUrl = technique.responsible.avatar;

    return (
        <div className="min-h-screen bg-white">
            <HeaderNav title="Technique title" />

            <div className="">
                {/* Responsible Person */}
                <button
                    onClick={() => router.push(`/responsible/${technique.responsible.id}`)}
                    className="w-full bg-primary-100 rounded-2xl p-4 mb-4 flex items-center justify-between hover:bg-primary-200 transition"
                >
                    <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-100 flex items-center justify-center shrink-0">
                            {avatarUrl ? (
                                <Image
                                    src={avatarUrl}
                                    alt={technique.responsible.full_name}
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                    unoptimized
                                />
                            ) : (
                                <span className="text-primary-500 text-xl font-semibold">
                                    {technique.responsible.full_name[0]}
                                </span>
                            )}
                        </div>
                        <div className="text-left">
                            <p className="font-semibold text-dark">{technique.responsible.full_name}</p>
                            <p className="text-sm text-dark-200">ответственный за технику</p>
                        </div>
                    </div>
                    <MdChevronRight className="w-5 h-5 text-gray-400" />
                </button>

                {/* Manuals Accordions */}
                <div className="space-y-3 bg-primary-100 rounded-2xl">
                    {technique.hints
                        .filter(hint => hint.type === 'guide')
                        .map((hint) => {
                            const isOpen = openAccordions.includes(hint.id);
                            // Сортируем элементы по order
                            const sortedElements = [...hint.elements].sort((a, b) => a.order - b.order);

                            return (
                                <div key={hint.id} className="">
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => toggleAccordion(hint.id)}
                                        className="w-full flex items-center justify-between p-4 bg-primary-100 hover:bg-primary-200 transition rounded-2xl"
                                    >
                                        <span className="font-semibold text-dark">{hint.title}</span>
                                        <MdExpandMore
                                            className={`w-6 h-6 text-dark transition-transform ${isOpen ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    {/* Accordion Content */}
                                    {isOpen && (
                                        <div className="mt-3 bg-primary-50 rounded-2xl p-4 space-y-4">
                                            {sortedElements.map((element) => (
                                                <div key={element.id}>
                                                    {/* Video Element */}
                                                    {element.element_type === 'video' && element.video_url && (
                                                        <div className="relative h-[240px] bg-primary-100 rounded-xl overflow-hidden">
                                                            <iframe
                                                                src={element.video_url}
                                                                className="w-full h-full"
                                                                allow="autoplay"
                                                                allowFullScreen
                                                            />
                                                        </div>
                                                    )}

                                                    {/* Image Element */}
                                                    {element.element_type === 'image' && element.image && (
                                                        <div className="relative h-[240px] bg-primary-100 rounded-xl overflow-hidden mb-3">
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${element.image}`}
                                                                alt="Hint image"
                                                                fill
                                                                className="object-cover"
                                                                unoptimized
                                                            />
                                                        </div>
                                                    )}

                                                    {/* Text Content - показываем для всех элементов если есть */}
                                                    {element.text_content && (
                                                        <p className="text-dark-200 text-sm leading-relaxed">
                                                            {element.text_content}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

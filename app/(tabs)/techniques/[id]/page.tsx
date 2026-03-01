'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { getTechniqueById } from '@/lib/techniqueApi';
import type { TechniqueItem } from '@/types/technique';
import { MdChevronRight } from 'react-icons/md';
import { HeaderNav } from "@/components/HeaderNav";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function TechniqueDetailPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [technique, setTechnique] = useState<TechniqueItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadTechnique = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await getTechniqueById(Number(id));
                setTechnique(data);
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
            <HeaderNav title="Техника" />

            <div className="">
                {/* Title */}
                <h2 className="text-2xl font-bold text-dark mb-4">
                    {technique.brand.name} / {technique.model}
                </h2>

                {/* Swipeable Image Carousel */}
                <div className="relative mb-6 rounded-2xl overflow-hidden bg-white">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet bg-[#fff] !opacity-70 !w-2 !h-2 ',
                            bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary-500 !opacity-100 !w-6 !rounded-[5px]',
                        }}
                        className="h-[280px] rounded-[5px] "
                    >
                        {technique.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative h-[280px] bg-gray-200 select-none">
                                    <Image
                                        src={image.image || '/placeholder-technique.jpg'}
                                        alt={`${technique.model} - ${index + 1}`}
                                        fill
                                        className="object-cover select-none"
                                        unoptimized
                                    />

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute top-4 right-4 z-10">
                        <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                            {technique.tag.name}
                        </span>
                    </div>
                </div>

                {/* Responsible Person */}
                <button
                    onClick={() => router.push(`/responsible/${technique.responsible.id}`)}
                    className="w-full bg-primary-100 rounded-2xl p-4 mb-3 flex items-center justify-between hover:bg-primary-200 transition group"
                >
                    <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-100 flex items-center justify-center shrink-0 cursor-pointer">
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
                            <p className="text-sm text-dark-200">ответственный за технику</p>
                            <p className="font-semibold text-dark">{technique.responsible.full_name}</p>
                        </div>
                    </div>
                    <MdChevronRight className="w-5 h-5 text-gray-400 group-hover:text-dark-100 transition" />
                </button>

                {/* Maintenance Button */}
                <button
                    onClick={() => router.push(`/techniques/${technique.id}/maintenance`)}
                    className="w-full bg-primary-100 rounded-2xl p-4 mb-3 flex items-center justify-between hover:bg-primary-200 transition group"
                >
                    <div className="text-left">
                        <p className="font-semibold text-dark">Техобслуживание</p>
                        <p className="text-sm text-dark-200">планы и история ТО</p>
                    </div>
                    <MdChevronRight className="w-5 h-5 text-gray-400 group-hover:text-dark-100 transition" />
                </button>

                <button
                    onClick={() => router.push(`/techniques/${id}/manuals`)}
                    className="w-full bg-primary-100 rounded-2xl p-4 mb-3 flex items-center justify-between hover:bg-primary-200 transition cursor-pointer group"
                >
                    <p className="font-semibold text-dark">Руководство</p>
                    <MdChevronRight className="w-5 h-5 text-gray-400 group-hover:text-dark-100 transition" />
                </button>

                <button
                    onClick={() => router.push(`/techniques/${id}/errors`)}
                    className="w-full bg-primary-100 rounded-2xl p-4 mb-3 flex items-center justify-between hover:bg-primary-200 transition cursor-pointer group"
                >
                    <p className="font-semibold text-dark">Ошибка</p>
                    <MdChevronRight className="w-5 h-5 text-gray-400 group-hover:text-dark-100 transition" />
                </button>
            </div>
        </div>
    );
}

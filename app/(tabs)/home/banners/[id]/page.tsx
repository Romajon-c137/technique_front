'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { MdArrowBack } from 'react-icons/md';
import { getBanner, type Banner } from '@/lib/bannersApi';

export default function BannerDetailPage() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();
    const [banner, setBanner] = useState<Banner | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        getBanner(id)
            .then(setBanner)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <p className="text-gray-400">Загрузка...</p>
            </div>
        );
    }

    if (!banner) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <p className="text-gray-400">Баннер не найден</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Back button overlay on image */}
            <div className="relative">
                {/* Image — 9:16 ratio */}
                <div style={{ aspectRatio: '9/16' }} className="w-full bg-gray-200 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={banner.image}
                        alt={banner.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Back button */}
                <button
                    onClick={() => router.back()}
                    className="absolute top-4 left-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow"
                >
                    <MdArrowBack className="w-5 h-5 text-dark" />
                </button>
            </div>

            {/* Content below image */}
            <div className="flex-1 px-5 pt-6 pb-10 space-y-3">
                <h1 className="text-xl font-bold text-dark leading-snug">{banner.title}</h1>
                {banner.description && (
                    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                        {banner.description}
                    </p>
                )}
            </div>
        </div>
    );
}

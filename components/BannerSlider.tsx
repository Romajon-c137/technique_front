'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getBanners, type Banner } from '@/lib/bannersApi';

export default function BannerSlider() {
    const router = useRouter();
    const [banners, setBanners] = useState<Banner[]>([]);

    useEffect(() => {
        getBanners().then(setBanners).catch(console.error);
    }, []);

    if (!banners.length) return null;

    return (
        <div
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
        >
            {banners.map(b => (
                <div
                    key={b.id}
                    className="shrink-0 snap-start rounded-3xl overflow-hidden cursor-pointer bg-gray-200"
                    style={{ width: 'calc(100% - 48px)', aspectRatio: '2/1' }}
                    onClick={() => router.push(`/home/banners/${b.id}`)}
                >
                    {b.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={b.image} alt={b.title} className="w-full h-full object-cover" draggable={false} />
                    ) : (
                        <div className="w-full h-full bg-primary-500 flex items-end p-4">
                            <p className="text-white font-bold">{b.title}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

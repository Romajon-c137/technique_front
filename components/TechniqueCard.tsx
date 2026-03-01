import Link from 'next/link';
import Image from 'next/image';
import type { TechniqueItem } from '@/types/technique';

interface TechniqueCardProps {
    item: TechniqueItem;
}

export function TechniqueCard({ item }: TechniqueCardProps) {
    // Получаем главное изображение или первое доступное
    const mainImage = item.images.find(img => img.is_main) || item.images[0];
    const imageUrl = mainImage?.image || '/image/no-image.png';
    return (
        <Link
            href={`/techniques/${item.id}`}
            className="block h-[230px] border border-primary-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
            {/* Верхняя часть - изображение с tag */}
            <div className="relative h-[160px] bg-gray-200">
                <Image
                    src={imageUrl}
                    alt={`${item.brand.name} ${item.model}`}
                    fill
                    className="object-cover"
                    unoptimized
                />

                {/* Tag в правом верхнем углу */}
                <div className="absolute top-3 right-3">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {item.tag.name}
                    </span>
                </div>
            </div>

            {/* Нижняя часть - текст */}
            <div className="h-[70px] flex items-center justify-start px-4">
                <p className="text-dark body-m text-start line-clamp-2">
                    {item.brand.name} / {item.model}
                </p>
            </div>
        </Link>
    );
}

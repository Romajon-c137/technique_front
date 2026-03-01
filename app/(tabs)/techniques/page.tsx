'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { TechniqueCard } from '@/components/TechniqueCard';
import { Pagination } from '@/components/Pagination';
import { getTechniqueList, getUsers } from '@/lib/techniqueApi';
import type { TechniqueListResponse, TechniqueItem } from '@/types/technique';
import { MdFilterList, MdClose } from 'react-icons/md';

interface FilterState {
    brand?: number;
    tag?: number;
    responsible?: string;
}

export default function Page() {
    const searchParams = useSearchParams();
    const [data, setData] = useState<TechniqueListResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Initialize filters from URL search params
    const [currentPage, setCurrentPage] = useState(() => {
        const page = searchParams.get('page');
        return page ? parseInt(page) : 1;
    });

    const [showFilters, setShowFilters] = useState(false);

    const [filters, setFilters] = useState<FilterState>(() => {
        const brand = searchParams.get('brand');
        const tag = searchParams.get('tag');
        const responsible = searchParams.get('responsible');

        return {
            brand: brand ? parseInt(brand) : undefined,
            tag: tag ? parseInt(tag) : undefined,
            responsible: responsible || undefined,
        };
    });

    // Extract unique brands and tags from results
    const [availableBrands, setAvailableBrands] = useState<{ id: number; name: string }[]>([]);
    const [availableTags, setAvailableTags] = useState<{ id: number; name: string }[]>([]);
    const [availableResponsibles, setAvailableResponsibles] = useState<{ id: string; name: string }[]>([]);

    // Load users list once on mount
    useEffect(() => {
        const loadUsers = async () => {
            try {
                const usersResponse = await getUsers();
                console.log('Loaded users:', usersResponse);
                setAvailableResponsibles(usersResponse.results.map(user => ({ id: user.id, name: user.full_name })));
            } catch (err) {
                console.error('Failed to load users:', err);
            }
        };

        loadUsers();
    }, []);

    useEffect(() => {
        const loadTechniques = async () => {
            try {
                setLoading(true);
                setError(null);

                const result = await getTechniqueList({
                    page: currentPage,
                    ...filters
                });
                setData(result);

                // Extract unique brands and tags for filter dropdowns
                const brands = new Map<number, string>();
                const tags = new Map<number, string>();

                result.results.forEach((item: TechniqueItem) => {
                    brands.set(item.brand.id, item.brand.name);
                    tags.set(item.tag.id, item.tag.name);
                });

                setAvailableBrands(Array.from(brands.entries()).map(([id, name]) => ({ id, name })));
                setAvailableTags(Array.from(tags.entries()).map(([id, name]) => ({ id, name })));
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Произошла ошибка при загрузке данных');
            } finally {
                setLoading(false);
            }
        };

        loadTechniques();
    }, [currentPage, filters]);

    // Sync filters and page to URL
    useEffect(() => {
        const params = new URLSearchParams();

        if (currentPage > 1) params.set('page', currentPage.toString());
        if (filters.brand) params.set('brand', filters.brand.toString());
        if (filters.tag) params.set('tag', filters.tag.toString());
        if (filters.responsible) params.set('responsible', filters.responsible);

        const newUrl = params.toString() ? `?${params.toString()}` : '/techniques';
        window.history.replaceState({}, '', newUrl);
    }, [currentPage, filters]);

    const totalPages = data ? Math.ceil(data.count / 10) : 0;

    const handleFilterChange = (key: keyof FilterState, value: number | string | undefined) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setFilters({});
        setCurrentPage(1);
    };

    const applyFilters = () => {
        setShowFilters(false);
    };

    const activeFiltersCount = Object.values(filters).filter(v => v !== undefined).length;

    return (
        <div className="min-h-screen flex flex-col p-4">
            {/* Header with title and filter button */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-dark">Техники</h1>
                <button
                    onClick={() => setShowFilters(true)}
                    className="relative flex items-center gap-2 px-4 py-2 bg-primary-100 hover:bg-primary-200 rounded-xl transition group"
                >
                    <MdFilterList className="w-5 h-5 text-dark-100 group-hover:text-dark transition" />
                    <span className="font-medium text-dark">Фильтры</span>
                    {activeFiltersCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center">
                            {activeFiltersCount}
                        </span>
                    )}
                </button>
            </div>

            {/* Filter Modal */}
            {showFilters && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 backdrop-blur-sm z-40 animate-fade-in"
                        onClick={() => setShowFilters(false)}
                    />

                    {/* Modal */}
                    <div className="fixed inset-x-0 bottom-0 z-50 animate-slide-up max-w-md mx-auto">
                        <div className="bg-white rounded-t-3xl p-6 shadow-2xl max-h-[80vh] overflow-y-auto">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-dark">Фильтры</h2>
                                <button
                                    onClick={() => setShowFilters(false)}
                                    className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-xl transition"
                                >
                                    <MdClose className="w-6 h-6 text-dark" />
                                </button>
                            </div>

                            {/* Filter Options */}
                            <div className="space-y-4">
                                {/* Brand filter */}
                                <div>
                                    <label className="block text-sm font-medium text-dark mb-2">Бренд</label>
                                    <select
                                        value={filters.brand || ''}
                                        onChange={(e) => handleFilterChange('brand', e.target.value ? Number(e.target.value) : undefined)}
                                        className="w-full px-4 py-3 bg-primary-50 border-1 border-dark-100  rounded-xl focus:outline-none focus:border-primary-500 transition"
                                    >
                                        <option value="">Все бренды</option>
                                        {availableBrands.map(brand => (
                                            <option key={brand.id} value={brand.id}>{brand.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Tag filter */}
                                <div>
                                    <label className="block text-sm font-medium text-dark mb-2">Категория</label>
                                    <select
                                        value={filters.tag || ''}
                                        onChange={(e) => handleFilterChange('tag', e.target.value ? Number(e.target.value) : undefined)}
                                        className="w-full px-4 py-3 bg-primary-50 border border-dark-100  rounded-xl focus:outline-none focus:border-primary-500 transition"
                                    >
                                        <option value="">Все категории</option>
                                        {availableTags.map(tag => (
                                            <option key={tag.id} value={tag.id}>{tag.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Responsible filter */}
                                <div>
                                    <label className="block text-sm font-medium text-dark mb-2">Ответственный</label>
                                    <select
                                        value={filters.responsible || ''}
                                        onChange={(e) => handleFilterChange('responsible', e.target.value || undefined)}
                                        className="w-full px-4 py-3 bg-primary-50 border-1 border-dark-100  rounded-xl focus:outline-none focus:border-primary-500 transition"
                                    >
                                        <option value="">Все ответственные</option>
                                        {availableResponsibles.map(responsible => (
                                            <option key={responsible.id} value={responsible.id}>{responsible.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Modal Actions */}
                            <div className="flex gap-3 mt-6">
                                {activeFiltersCount > 0 && (
                                    <button
                                        onClick={clearFilters}
                                        className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-dark font-medium rounded-xl transition"
                                    >
                                        Сбросить
                                    </button>
                                )}
                                <button
                                    onClick={applyFilters}
                                    className="flex-1 px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition"
                                >
                                    Применить
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {loading && (
                <div className="flex items-center justify-center py-12">
                    <p className="text-gray-600">Загрузка...</p>
                </div>
            )}

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <p><strong>Ошибка:</strong> {error}</p>
                </div>
            )}

            {/* Content area - grows to fill space */}
            <div className="flex-1">
                {data && data.results.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {data.results.map((item) => (
                            <TechniqueCard key={item.id} item={item} />
                        ))}
                    </div>
                )}

                {data && data.results.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">Нет доступных техник</p>
                        {activeFiltersCount > 0 && (
                            <button
                                onClick={clearFilters}
                                className="mt-4 text-primary-500 hover:underline"
                            >
                                Сбросить фильтры
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Pagination - always at bottom */}
            {data && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalCount={data.count}
                    hasNext={!!data.next}
                    onPageChange={setCurrentPage}
                />
            )}

            <style jsx global>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slide-up {
                    from {
                        transform: translateY(100%);
                    }
                    to {
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }

                .animate-slide-up {
                    animation: slide-up 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}

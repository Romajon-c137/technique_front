import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    hasNext: boolean;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, totalCount, hasNext, onPageChange }: PaginationProps) {
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleNextPage = () => {
        if (hasNext) {
            onPageChange(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePageClick = (page: number) => {
        onPageChange(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="mt-auto pt-6 pb-2">
            <div className="flex items-center justify-center gap-2">
                {/* Previous Button */}
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl transition ${currentPage === 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-primary-100 text-dark hover:bg-primary-200'
                        }`}
                >
                    <MdChevronLeft className="w-5 h-5" />
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((page, index) => {
                    if (page === '...') {
                        return (
                            <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
                                ...
                            </span>
                        );
                    }

                    return (
                        <button
                            key={page}
                            onClick={() => handlePageClick(page as number)}
                            className={`min-w-[40px] h-10 px-3 rounded-xl font-medium transition ${currentPage === page
                                    ? 'bg-primary-500 text-white'
                                    : 'bg-primary-100 text-dark hover:bg-primary-200'
                                }`}
                        >
                            {page}
                        </button>
                    );
                })}

                {/* Next Button */}
                <button
                    onClick={handleNextPage}
                    disabled={!hasNext}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl transition ${!hasNext
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-primary-100 text-dark hover:bg-primary-200'
                        }`}
                >
                    <MdChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Page info */}
            <div className="text-center mt-3">
                <p className="text-sm text-gray-500">
                    Страница {currentPage} из {totalPages} • Всего: {totalCount}
                </p>
            </div>
        </div>
    );
}

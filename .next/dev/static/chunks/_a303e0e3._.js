(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/HeaderNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderNav",
    ()=>HeaderNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function HeaderNav({ title, onBack }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleBack = ()=>{
        if (onBack) {
            onBack();
        } else {
            router.back();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-14 flex items-center justify-center relative bg-white ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleBack,
                className: "absolute left-0 h-full  flex items-center justify-center text-primary-500 hover:text-primary-400 transition-colors",
                "aria-label": "Назад",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15 18L9 12L15 6",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/HeaderNav.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HeaderNav.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeaderNav.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-dark-900",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/HeaderNav.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeaderNav.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_s(HeaderNav, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HeaderNav;
var _c;
__turbopack_context__.k.register(_c, "HeaderNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MaintenanceCalendar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaintenanceCalendar",
    ()=>MaintenanceCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Local date string YYYY-MM-DD (avoids timezone shift from toISOString)
const toLocalDateStr = (date)=>{
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
};
function MaintenanceCalendar({ plans = [], instances = [], selectedDate, onDateClick, onMonthChange }) {
    _s();
    const now = new Date();
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(now.getFullYear());
    const [month, setMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(now.getMonth()); // 0-indexed
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Monday = 0
    const daysInMonth = lastDay.getDate();
    const totalCells = Math.ceil((daysInMonth + startingDayOfWeek) / 7) * 7;
    const monthName = new Date(year, month, 1).toLocaleDateString('ru-RU', {
        month: 'long',
        year: 'numeric'
    });
    const goToPrev = ()=>{
        const newDate = new Date(year, month - 1, 1);
        setYear(newDate.getFullYear());
        setMonth(newDate.getMonth());
        onMonthChange?.(newDate.getFullYear(), newDate.getMonth());
    };
    const goToNext = ()=>{
        const newDate = new Date(year, month + 1, 1);
        setYear(newDate.getFullYear());
        setMonth(newDate.getMonth());
        onMonthChange?.(newDate.getFullYear(), newDate.getMonth());
    };
    // Count instances per date for dot color logic
    const getInstancesOnDate = (date)=>{
        const dateStr = toLocalDateStr(date);
        return instances.filter((i)=>i.scheduled_date === dateStr);
    };
    const getDotColor = (dayInstances)=>{
        if (dayInstances.length === 0) return null;
        if (dayInstances.some((i)=>i.status === 'overdue')) return 'bg-red-500';
        if (dayInstances.some((i)=>i.status === 'due' || i.status === 'in_progress')) return 'bg-orange-400';
        if (dayInstances.some((i)=>i.status === 'done')) return 'bg-green-500';
        return 'bg-primary-500'; // planned
    };
    const renderCell = (index)=>{
        const dayNumber = index - startingDayOfWeek + 1;
        if (index < startingDayOfWeek || dayNumber > daysInMonth) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-square"
            }, index, false, {
                fileName: "[project]/components/MaintenanceCalendar.tsx",
                lineNumber: 77,
                columnNumber: 20
            }, this);
        }
        const cellDate = new Date(year, month, dayNumber);
        const cellDateStr = toLocalDateStr(cellDate);
        const dayInstances = getInstancesOnDate(cellDate);
        const dotColor = getDotColor(dayInstances);
        const today = new Date();
        const isToday = today.getDate() === dayNumber && today.getMonth() === month && today.getFullYear() === year;
        const isSelected = selectedDate === cellDateStr;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>onDateClick?.(cellDate),
            className: `aspect-square rounded-lg flex flex-col items-center justify-center relative transition
                    ${isSelected ? 'bg-primary-200' : isToday ? 'bg-primary-100' : 'hover:bg-gray-100'}
                    ${dayInstances.length > 0 ? 'cursor-pointer' : ''}
                `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `text-sm ${isSelected || isToday ? 'text-primary-600 font-bold' : 'text-gray-700'}`,
                    children: dayNumber
                }, void 0, false, {
                    fileName: "[project]/components/MaintenanceCalendar.tsx",
                    lineNumber: 105,
                    columnNumber: 17
                }, this),
                dotColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-1.5 h-1.5 rounded-full mt-0.5 ${dotColor}`
                }, void 0, false, {
                    fileName: "[project]/components/MaintenanceCalendar.tsx",
                    lineNumber: 110,
                    columnNumber: 21
                }, this)
            ]
        }, index, true, {
            fileName: "[project]/components/MaintenanceCalendar.tsx",
            lineNumber: 92,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToPrev,
                        className: "w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronLeft"], {
                            className: "w-5 h-5 text-gray-600"
                        }, void 0, false, {
                            fileName: "[project]/components/MaintenanceCalendar.tsx",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/MaintenanceCalendar.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-dark capitalize",
                        children: monthName
                    }, void 0, false, {
                        fileName: "[project]/components/MaintenanceCalendar.tsx",
                        lineNumber: 126,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToNext,
                        className: "w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronRight"], {
                            className: "w-5 h-5 text-gray-600"
                        }, void 0, false, {
                            fileName: "[project]/components/MaintenanceCalendar.tsx",
                            lineNumber: 131,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/MaintenanceCalendar.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MaintenanceCalendar.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-1 mb-2",
                children: [
                    'Пн',
                    'Вт',
                    'Ср',
                    'Чт',
                    'Пт',
                    'Сб',
                    'Вс'
                ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-xs text-gray-400 font-medium py-1",
                        children: day
                    }, day, false, {
                        fileName: "[project]/components/MaintenanceCalendar.tsx",
                        lineNumber: 138,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/MaintenanceCalendar.tsx",
                lineNumber: 136,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-1",
                children: Array.from({
                    length: totalCells
                }, (_, i)=>renderCell(i))
            }, void 0, false, {
                fileName: "[project]/components/MaintenanceCalendar.tsx",
                lineNumber: 145,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-3 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-primary-500"
                            }, void 0, false, {
                                fileName: "[project]/components/MaintenanceCalendar.tsx",
                                lineNumber: 152,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500",
                                children: "Запланировано"
                            }, void 0, false, {
                                fileName: "[project]/components/MaintenanceCalendar.tsx",
                                lineNumber: 153,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MaintenanceCalendar.tsx",
                        lineNumber: 151,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            }, void 0, false, {
                                fileName: "[project]/components/MaintenanceCalendar.tsx",
                                lineNumber: 156,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500",
                                children: "К выполнению"
                            }, void 0, false, {
                                fileName: "[project]/components/MaintenanceCalendar.tsx",
                                lineNumber: 157,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MaintenanceCalendar.tsx",
                        lineNumber: 155,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-red-500"
                            }, void 0, false, {
                                fileName: "[project]/components/MaintenanceCalendar.tsx",
                                lineNumber: 160,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500",
                                children: "Просрочено"
                            }, void 0, false, {
                                fileName: "[project]/components/MaintenanceCalendar.tsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MaintenanceCalendar.tsx",
                        lineNumber: 159,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-green-500"
                            }, void 0, false, {
                                fileName: "[project]/components/MaintenanceCalendar.tsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500",
                                children: "Выполнено"
                            }, void 0, false, {
                                fileName: "[project]/components/MaintenanceCalendar.tsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MaintenanceCalendar.tsx",
                        lineNumber: 163,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MaintenanceCalendar.tsx",
                lineNumber: 150,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MaintenanceCalendar.tsx",
        lineNumber: 117,
        columnNumber: 9
    }, this);
}
_s(MaintenanceCalendar, "9BQ3J241m9dYGkSoSh2YnuuBccM=");
_c = MaintenanceCalendar;
var _c;
__turbopack_context__.k.register(_c, "MaintenanceCalendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/techniqueApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "completeMaintenance",
    ()=>completeMaintenance,
    "deleteMaintenancePhoto",
    ()=>deleteMaintenancePhoto,
    "getMaintenanceInstance",
    ()=>getMaintenanceInstance,
    "getMaintenanceInstances",
    ()=>getMaintenanceInstances,
    "getMaintenancePlans",
    ()=>getMaintenancePlans,
    "getMyMaintenanceTodos",
    ()=>getMyMaintenanceTodos,
    "getTechniqueById",
    ()=>getTechniqueById,
    "getTechniqueList",
    ()=>getTechniqueList,
    "getUsers",
    ()=>getUsers,
    "startMaintenance",
    ()=>startMaintenance,
    "updateMaintenanceTasks",
    ()=>updateMaintenanceTasks,
    "uploadMaintenancePhoto",
    ()=>uploadMaintenancePhoto
]);
const API_BASE_URL = '/api';
/**
 * Получить токен авторизации из localStorage
 */ function getAuthToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem('akfa_access_token');
}
/**
 * Базовая функция для выполнения запросов к API
 */ async function fetchAPI(endpoint, options = {}) {
    const token = getAuthToken();
    const config = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...token ? {
                'Authorization': `Bearer ${token}`
            } : {},
            ...options.headers
        }
    };
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, config);
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error ${response.status}: ${errorText}`);
    }
    // 204 No Content (e.g. DELETE) — nothing to parse
    if (response.status === 204) {
        return null;
    }
    return response.json();
}
async function getTechniqueList(params) {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.page_size) queryParams.append('page_size', params.page_size.toString());
    if (params?.model) queryParams.append('model', params.model);
    if (params?.brand) queryParams.append('brand', params.brand.toString());
    if (params?.brand_name) queryParams.append('brand_name', params.brand_name);
    if (params?.tag) queryParams.append('tag', params.tag.toString());
    if (params?.tag_name) queryParams.append('tag_name', params.tag_name);
    if (params?.responsible) queryParams.append('responsible', params.responsible);
    if (params?.responsible_name) queryParams.append('responsible_name', params.responsible_name);
    const queryString = queryParams.toString();
    const endpoint = `/v1/technique/items${queryString ? '?' + queryString : ''}`;
    return fetchAPI(endpoint);
}
async function getTechniqueById(id) {
    return fetchAPI(`/v1/technique/items/${id}`);
}
async function getUsers() {
    return fetchAPI('/v1/auth/users');
}
async function getMyMaintenanceTodos(params) {
    const queryParams = new URLSearchParams();
    if (params?.date) queryParams.append('date', params.date);
    if (params?.status) queryParams.append('status', params.status);
    if (params?.equipment) queryParams.append('equipment', params.equipment.toString());
    if (params?.scheduled_date) queryParams.append('scheduled_date', params.scheduled_date);
    const queryString = queryParams.toString();
    const endpoint = `/v1/maintenance/instances${queryString ? '?' + queryString : ''}`;
    return fetchAPI(endpoint);
}
async function getMaintenanceInstance(id) {
    return fetchAPI(`/v1/maintenance/instances/${id}`);
}
async function startMaintenance(id) {
    return fetchAPI(`/v1/maintenance/instances/${id}/start`, {
        method: 'POST'
    });
}
async function updateMaintenanceTasks(id, taskStates) {
    return fetchAPI(`/v1/maintenance/instances/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            task_states: taskStates
        })
    });
}
async function uploadMaintenancePhoto(id, imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('instance', id);
    const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('akfa_access_token') : "TURBOPACK unreachable";
    const response = await fetch(`/api/v1/maintenance/photos`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    });
    if (!response.ok) {
        throw new Error('Failed to upload photo');
    }
    return response.json();
}
async function completeMaintenance(id) {
    return fetchAPI(`/v1/maintenance/instances/${id}/complete`, {
        method: 'POST'
    });
}
async function getMaintenancePlans(params) {
    const queryParams = new URLSearchParams();
    if (params?.equipment) queryParams.append('equipment', params.equipment.toString());
    if (params?.is_active !== undefined) queryParams.append('is_active', params.is_active.toString());
    const queryString = queryParams.toString();
    const endpoint = `/v1/maintenance/plans${queryString ? '?' + queryString : ''}`;
    return fetchAPI(endpoint);
}
async function getMaintenanceInstances(params) {
    const queryParams = new URLSearchParams();
    if (params?.equipment) queryParams.append('equipment', params.equipment.toString());
    if (params?.status) queryParams.append('status', params.status);
    if (params?.ordering) queryParams.append('ordering', params.ordering);
    if (params?.scheduled_date_after) queryParams.append('scheduled_date_after', params.scheduled_date_after);
    if (params?.scheduled_date_before) queryParams.append('scheduled_date_before', params.scheduled_date_before);
    if (params?.assigned_to) queryParams.append('assigned_to', params.assigned_to);
    if (params?.completed_by) queryParams.append('completed_by', params.completed_by);
    if (params?.['equipment__responsible']) queryParams.append('equipment__responsible', params['equipment__responsible']);
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.page_size) queryParams.append('page_size', params.page_size.toString());
    const queryString = queryParams.toString();
    const endpoint = `/v1/maintenance/instances${queryString ? '?' + queryString : ''}`;
    return fetchAPI(endpoint);
}
async function deleteMaintenancePhoto(_instanceId, photoId) {
    await fetchAPI(`/v1/maintenance/photos/${photoId}`, {
        method: 'DELETE'
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TechniqueMaintenancePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeaderNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HeaderNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MaintenanceCalendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MaintenanceCalendar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/techniqueApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Local date string YYYY-MM-DD without timezone shift
const toLocalDateStr = (date)=>{
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
};
function TechniqueMaintenancePage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const techniqueId = params.id;
    // Pending (due + overdue) tasks for "today" tab
    const [overdueTasks, setOverdueTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [todayTasks, setTodayTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // All instances for calendar (all statuses)
    const [allInstances, setAllInstances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Plans for the schedule tab
    const [plans, setPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // History: done instances
    const [historyTasks, setHistoryTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('today');
    // Calendar — selected date state
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedDateInstances, setSelectedDateInstances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Calendar — current month
    const [calendarYear, setCalendarYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().getFullYear());
    const [calendarMonth, setCalendarMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().getMonth());
    const loadCalendarInstances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TechniqueMaintenancePage.useCallback[loadCalendarInstances]": async (year, month, autoSelectToday = false)=>{
            try {
                const firstOfMonth = toLocalDateStr(new Date(year, month, 1));
                const lastOfMonth = toLocalDateStr(new Date(year, month + 1, 0));
                const allResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaintenanceInstances"])({
                    equipment: techniqueId,
                    scheduled_date_after: firstOfMonth,
                    scheduled_date_before: lastOfMonth
                });
                const instances = allResponse?.results || [];
                setAllInstances(instances);
                // Auto-select today if requested and today has instances
                if (autoSelectToday) {
                    const today = toLocalDateStr(new Date());
                    const todayInstances = instances.filter({
                        "TechniqueMaintenancePage.useCallback[loadCalendarInstances].todayInstances": (i)=>i.scheduled_date === today
                    }["TechniqueMaintenancePage.useCallback[loadCalendarInstances].todayInstances"]);
                    if (todayInstances.length > 0) {
                        setSelectedDate(today);
                        setSelectedDateInstances(todayInstances);
                    }
                }
            } catch (err) {
                console.error('Failed to load calendar instances:', err);
            }
        }
    }["TechniqueMaintenancePage.useCallback[loadCalendarInstances]"], [
        techniqueId
    ]);
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TechniqueMaintenancePage.useCallback[loadData]": async ()=>{
            try {
                setLoading(true);
                const today = toLocalDateStr(new Date());
                // 1. TODAY tab: only instances scheduled for today
                const [todayResponse, overdueResponse] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaintenanceInstances"])({
                        equipment: techniqueId,
                        scheduled_date_after: today,
                        scheduled_date_before: today
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaintenanceInstances"])({
                        equipment: techniqueId,
                        status: 'overdue'
                    })
                ]);
                const allTodayInstances = (todayResponse?.results ?? []).filter({
                    "TechniqueMaintenancePage.useCallback[loadData].allTodayInstances": (t)=>t.status !== 'overdue' // overdue with today's date go to overdue section
                }["TechniqueMaintenancePage.useCallback[loadData].allTodayInstances"]);
                setOverdueTasks(overdueResponse?.results ?? []);
                setTodayTasks(allTodayInstances);
                // 2. Plans for schedule tab
                const plansResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaintenancePlans"])({
                    equipment: techniqueId,
                    is_active: true
                });
                setPlans(plansResponse?.results || []);
                // 3. History: only done, sorted by completion date desc
                const historyResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaintenanceInstances"])({
                    equipment: techniqueId,
                    status: 'done',
                    ordering: '-completed_at'
                });
                setHistoryTasks(historyResponse?.results || []);
            } catch (err) {
                console.error('Failed to load maintenance data:', err);
            } finally{
                setLoading(false);
            }
        }
    }["TechniqueMaintenancePage.useCallback[loadData]"], [
        techniqueId
    ]);
    // Initial load: data + current month calendar (auto-select today if has instances)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TechniqueMaintenancePage.useEffect": ()=>{
            loadData();
            loadCalendarInstances(calendarYear, calendarMonth, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TechniqueMaintenancePage.useEffect"], [
        loadData,
        loadCalendarInstances
    ]);
    // When a calendar date is clicked — find instances for that date
    const handleDateClick = (date)=>{
        const dateStr = toLocalDateStr(date);
        setSelectedDate(dateStr);
        const found = allInstances.filter((i)=>i.scheduled_date === dateStr);
        setSelectedDateInstances(found);
        setActiveTab('schedule');
    };
    // When calendar month changes — only reload calendar instances (no full reload)
    const handleMonthChange = (year, month)=>{
        setCalendarYear(year);
        setCalendarMonth(month);
        setSelectedDate(null);
        setSelectedDateInstances([]);
        loadCalendarInstances(year, month);
    };
    const getResponsibleUser = ()=>{
        const first = overdueTasks[0] || todayTasks[0] || historyTasks[0];
        return first?.equipment?.responsible;
    };
    const formatDate = (dateStr)=>{
        return new Date(dateStr).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };
    const getStatusColor = (status)=>{
        switch(status){
            case 'done':
                return 'text-green-600 bg-green-100';
            case 'overdue':
                return 'text-red-600 bg-red-100';
            case 'in_progress':
                return 'text-blue-600 bg-blue-100';
            case 'due':
                return 'text-orange-600 bg-orange-100';
            case 'planned':
                return 'text-gray-600 bg-gray-100';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };
    const getStatusLabel = (status)=>{
        switch(status){
            case 'done':
                return 'Выполнено';
            case 'overdue':
                return 'Просрочено';
            case 'in_progress':
                return 'В процессе';
            case 'due':
                return 'К выполнению';
            case 'planned':
                return 'Запланировано';
            case 'cancelled':
                return 'Отменено';
            default:
                return status;
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: "Загрузка..."
            }, void 0, false, {
                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                lineNumber: 184,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
            lineNumber: 183,
            columnNumber: 13
        }, this);
    }
    const responsible = getResponsibleUser();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white relative pb-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeaderNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderNav"], {
                title: "Техобслуживание"
            }, void 0, false, {
                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                lineNumber: 193,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-gray-200 rounded-2xl p-1 mb-4",
                        children: [
                            'today',
                            'schedule',
                            'history'
                        ].map((tab, idx)=>{
                            const labels = {
                                today: 'На сегодня',
                                schedule: 'График',
                                history: 'История'
                            };
                            const allTabs = [
                                'today',
                                'schedule',
                                'history'
                            ];
                            const isActive = activeTab === tab;
                            const prevTab = allTabs[idx - 1];
                            const showDivider = idx > 0 && !isActive && activeTab !== prevTab;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab(tab);
                                    setSelectedDate(null);
                                },
                                className: `relative flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${isActive ? 'bg-white text-dark-900 shadow-sm' : 'text-dark-100 hover:text-dark-300'}`,
                                children: [
                                    showDivider && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-0 top-[20%] h-[60%] w-px bg-gray-300"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 37
                                    }, this),
                                    labels[tab]
                                ]
                            }, tab, true, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                lineNumber: 210,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                        lineNumber: 197,
                        columnNumber: 17
                    }, this),
                    activeTab === 'today' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            overdueTasks.length === 0 && todayTasks.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-4xl mb-3",
                                        children: "✅"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Нет заданий на сегодня"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400 mt-1",
                                        children: "Все ТО выполнены"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                lineNumber: 231,
                                columnNumber: 29
                            }, this),
                            overdueTasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-red-600 mb-3",
                                        children: "⚠️ Просрочено"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: overdueTasks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl p-4 bg-red-50 border-2 border-red-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold text-dark",
                                                                children: item.plan_title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded",
                                                                children: "Просрочено"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 247,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mb-1",
                                                        children: item.plan_type_display
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-red-500 mb-3",
                                                        children: [
                                                            "📅 ",
                                                            formatDate(item.scheduled_date)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mb-3 space-y-1",
                                                        children: item.task_states.map((task, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-sm text-gray-700 flex items-start gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                        lineNumber: 257,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: task.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                        lineNumber: 258,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    task.is_required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 78
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 53
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 45
                                                    }, this),
                                                    item.progress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between text-xs text-gray-500 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Прогресс"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                        lineNumber: 267,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            item.progress.percentage,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                        lineNumber: 268,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-1.5 bg-gray-200 rounded-full overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-full bg-red-500 rounded-full transition-all",
                                                                    style: {
                                                                        width: `${item.progress.percentage}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 57
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>router.push(`/techniques/${techniqueId}/maintenance/${item.id}`),
                                                        className: "w-full px-6 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition",
                                                        children: "Сделать срочно"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                lineNumber: 240,
                                columnNumber: 29
                            }, this),
                            todayTasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-dark mb-3",
                                        children: "На сегодня"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 294,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 border-2 border-primary-100 rounded-2xl ",
                                        children: todayTasks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-light-100 rounded-2xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between gap-2 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold text-dark",
                                                                children: item.plan_title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${getStatusColor(item.status)}`,
                                                                children: getStatusLabel(item.status)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mb-3",
                                                        children: item.plan_type_display
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mb-3 space-y-1",
                                                        children: item.task_states.map((task, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-sm text-gray-700 flex items-start gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                        lineNumber: 309,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: task.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                        lineNumber: 310,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    task.is_required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                        lineNumber: 311,
                                                                        columnNumber: 78
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 53
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 45
                                                    }, this),
                                                    item.progress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between text-xs text-gray-500 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Прогресс"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            item.progress.percentage,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                        lineNumber: 320,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-1.5 bg-gray-200 rounded-full overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-full bg-primary-500 rounded-full transition-all",
                                                                    style: {
                                                                        width: `${item.progress.percentage}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                    lineNumber: 323,
                                                                    columnNumber: 57
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 49
                                                    }, this),
                                                    item.status === 'done' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full px-4 py-3 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-600 font-medium text-sm",
                                                            children: "✅ Выполнено"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 49
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>router.push(`/techniques/${techniqueId}/maintenance/${item.id}`),
                                                        className: "w-full px-6 py-3 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition",
                                                        children: item.status === 'in_progress' ? 'Закончить' : 'Сделать'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                lineNumber: 293,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                        lineNumber: 229,
                        columnNumber: 21
                    }, this),
                    activeTab === 'schedule' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MaintenanceCalendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaintenanceCalendar"], {
                                plans: plans,
                                instances: allInstances,
                                selectedDate: selectedDate,
                                onDateClick: handleDateClick,
                                onMonthChange: handleMonthChange
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                lineNumber: 354,
                                columnNumber: 25
                            }, this),
                            selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-dark mb-3",
                                        children: [
                                            "📅 ",
                                            formatDate(selectedDate)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 365,
                                        columnNumber: 33
                                    }, this),
                                    selectedDateInstances.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-sm text-center py-6",
                                        children: "Нет ТО на этот день"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 370,
                                        columnNumber: 37
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: selectedDateInstances.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-light-100 rounded-2xl p-4 cursor-pointer bg-primary-100 transition",
                                                onClick: ()=>router.push(`/techniques/${techniqueId}/maintenance/${item.id}`),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold text-dark",
                                                                children: item.plan_title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs font-semibold px-2 py-1 rounded ${getStatusColor(item.status)}`,
                                                                children: getStatusLabel(item.status)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 mb-3",
                                                        children: item.plan_type_display
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 49
                                                    }, this),
                                                    item.progress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between text-xs text-gray-600 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Задачи: ",
                                                                            item.progress.completed,
                                                                            "/",
                                                                            item.progress.total
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                        lineNumber: 390,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            item.progress.percentage,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                        lineNumber: 391,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-1.5 bg-gray-200 rounded-full overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-full bg-primary-500 rounded-full",
                                                                    style: {
                                                                        width: `${item.progress.percentage}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                    lineNumber: 394,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                                lineNumber: 393,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 53
                                                    }, this),
                                                    (item.status === 'due' || item.status === 'overdue' || item.status === 'in_progress' || item.status === 'planned') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            router.push(`/techniques/${techniqueId}/maintenance/${item.id}`);
                                                        },
                                                        className: `w-full py-3 rounded-xl font-medium transition text-white ${item.status === 'overdue' ? 'bg-red-500 hover:bg-red-600' : 'bg-primary-500 hover:bg-primary-600'}`,
                                                        children: item.status === 'overdue' ? 'Сделать срочно' : 'Сделать'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                lineNumber: 374,
                                                columnNumber: 45
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                lineNumber: 364,
                                columnNumber: 29
                            }, this),
                            !selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-sm text-gray-400 mt-4",
                                children: "Нажмите на день чтобы увидеть ТО"
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                lineNumber: 424,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                        lineNumber: 353,
                        columnNumber: 21
                    }, this),
                    activeTab === 'history' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: historyTasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-4xl mb-3",
                                    children: "📋"
                                }, void 0, false, {
                                    fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                    lineNumber: 436,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 font-medium",
                                    children: "История пуста"
                                }, void 0, false, {
                                    fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                    lineNumber: 437,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 mt-1",
                                    children: "Выполненные ТО появятся здесь"
                                }, void 0, false, {
                                    fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                    lineNumber: 438,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                            lineNumber: 435,
                            columnNumber: 29
                        }, this) : historyTasks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push(`/techniques/${techniqueId}/maintenance/${item.id}`),
                                className: "w-full text-left bg-light-100 hover:bg-gray-100 transition rounded-2xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-dark",
                                                children: item.plan_title
                                            }, void 0, false, {
                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                lineNumber: 448,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-green-600 bg-green-100 px-2 py-1 rounded font-semibold",
                                                children: "Выполнено"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                lineNumber: 449,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mb-1",
                                        children: item.plan_type_display
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            "📅 ",
                                            formatDate(item.completed_at || item.scheduled_date)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 454,
                                        columnNumber: 37
                                    }, this),
                                    item.completed_by && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mt-0.5",
                                        children: [
                                            "👤 ",
                                            item.completed_by.full_name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 41
                                    }, this),
                                    item.progress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-1 bg-gray-200 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full bg-green-500 rounded-full",
                                                style: {
                                                    width: `${item.progress.percentage}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                                lineNumber: 465,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                                lineNumber: 442,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                        lineNumber: 433,
                        columnNumber: 21
                    }, this),
                    responsible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push(`/responsible/${responsible.id}`),
                        className: "absolute  bottom-0 left-0 w-full text-start text-sm text-dark-100 hover:text-primary-500 transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary-500 font-medium underline underline-offset-2",
                            children: [
                                "Ответственный:",
                                ' ',
                                responsible.full_name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                            lineNumber: 484,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                        lineNumber: 480,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(tabs)/techniques/[id]/maintenance/page.tsx",
        lineNumber: 192,
        columnNumber: 9
    }, this);
}
_s(TechniqueMaintenancePage, "WCYDmPR0Ql8vNxdDhpFBBbnWr7s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TechniqueMaintenancePage;
var _c;
__turbopack_context__.k.register(_c, "TechniqueMaintenancePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a303e0e3._.js.map
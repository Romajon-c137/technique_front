(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/app/(tabs)/techniques/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TechniqueDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/techniqueApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeaderNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HeaderNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function TechniqueDetailPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params.id;
    const [technique, setTechnique] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TechniqueDetailPage.useEffect": ()=>{
            const loadTechnique = {
                "TechniqueDetailPage.useEffect.loadTechnique": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTechniqueById"])(Number(id));
                        setTechnique(data);
                    } catch (err) {
                        setError(err instanceof Error ? err.message : 'Ошибка загрузки');
                    } finally{
                        setLoading(false);
                    }
                }
            }["TechniqueDetailPage.useEffect.loadTechnique"];
            if (id) {
                loadTechnique();
            }
        }
    }["TechniqueDetailPage.useEffect"], [
        id
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: "Загрузка..."
            }, void 0, false, {
                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                lineNumber: 48,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
            lineNumber: 47,
            columnNumber: 13
        }, this);
    }
    if (error || !technique) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: error || 'Техника не найдена'
                }, void 0, false, {
                    fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                    lineNumber: 57,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                lineNumber: 56,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
            lineNumber: 55,
            columnNumber: 13
        }, this);
    }
    const avatarUrl = technique.responsible.avatar;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeaderNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderNav"], {
                title: "Техника"
            }, void 0, false, {
                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-dark mb-4",
                        children: [
                            technique.brand.name,
                            " / ",
                            technique.model
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mb-6 rounded-2xl overflow-hidden bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                                modules: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                                ],
                                pagination: {
                                    clickable: true,
                                    bulletClass: 'swiper-pagination-bullet bg-[#fff] !opacity-70 !w-2 !h-2 ',
                                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary-500 !opacity-100 !w-6 !rounded-[5px]'
                                },
                                className: "h-[280px] rounded-[5px] ",
                                children: technique.images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-[280px] bg-gray-200 select-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: image.image || '/placeholder-technique.jpg',
                                                alt: `${technique.model} - ${index + 1}`,
                                                fill: true,
                                                className: "object-cover select-none",
                                                unoptimized: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 33
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium",
                                    children: technique.tag.name
                                }, void 0, false, {
                                    fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push(`/responsible/${technique.responsible.id}`),
                        className: "w-full bg-primary-100 rounded-2xl p-4 mb-3 flex items-center justify-between hover:bg-primary-200 transition group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-full overflow-hidden bg-primary-100 flex items-center justify-center shrink-0 cursor-pointer",
                                        children: avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: avatarUrl,
                                            alt: technique.responsible.full_name,
                                            width: 48,
                                            height: 48,
                                            className: "object-cover w-full h-full",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary-500 text-xl font-semibold",
                                            children: technique.responsible.full_name[0]
                                        }, void 0, false, {
                                            fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-dark-200",
                                                children: "ответственный за технику"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-dark",
                                                children: technique.responsible.full_name
                                            }, void 0, false, {
                                                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                lineNumber: 113,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronRight"], {
                                className: "w-5 h-5 text-gray-400 group-hover:text-dark-100 transition"
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                lineNumber: 136,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push(`/techniques/${technique.id}/maintenance`),
                        className: "w-full bg-primary-100 rounded-2xl p-4 mb-3 flex items-center justify-between hover:bg-primary-200 transition group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-dark",
                                        children: "Техобслуживание"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-dark-200",
                                        children: "планы и история ТО"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronRight"], {
                                className: "w-5 h-5 text-gray-400 group-hover:text-dark-100 transition"
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                lineNumber: 148,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push(`/techniques/${id}/manuals`),
                        className: "w-full bg-primary-100 rounded-2xl p-4 mb-3 flex items-center justify-between hover:bg-primary-200 transition cursor-pointer group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-dark",
                                children: "Руководство"
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                lineNumber: 155,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronRight"], {
                                className: "w-5 h-5 text-gray-400 group-hover:text-dark-100 transition"
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                lineNumber: 156,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                        lineNumber: 151,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push(`/techniques/${id}/errors`),
                        className: "w-full bg-primary-100 rounded-2xl p-4 mb-3 flex items-center justify-between hover:bg-primary-200 transition cursor-pointer group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-dark",
                                children: "Ошибка"
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                lineNumber: 163,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronRight"], {
                                className: "w-5 h-5 text-gray-400 group-hover:text-dark-100 transition"
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                        lineNumber: 159,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(tabs)/techniques/[id]/page.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, this);
}
_s(TechniqueDetailPage, "I5GLKxlktoipFzBUDKW5GsXCmVQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = TechniqueDetailPage;
var _c;
__turbopack_context__.k.register(_c, "TechniqueDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_29a1b252._.js.map
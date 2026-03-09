module.exports = [
"[project]/components/HeaderNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderNav",
    ()=>HeaderNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
function HeaderNav({ title, onBack }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleBack = ()=>{
        if (onBack) {
            onBack();
        } else {
            router.back();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-14 flex items-center justify-center relative bg-white ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleBack,
                className: "absolute left-0 h-full  flex items-center justify-center text-primary-500 hover:text-primary-400 transition-colors",
                "aria-label": "Назад",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
}),
"[project]/lib/techniqueApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
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
    const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
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
}),
"[project]/app/(tabs)/home/overdue/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OverduePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeaderNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HeaderNav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/techniqueApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/AuthContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function OverduePage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (p = 1)=>{
        if (!user?.id) return;
        setLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaintenanceInstances"])({
                status: 'overdue',
                'equipment__responsible': user.id.toString(),
                ordering: 'scheduled_date',
                page: p,
                page_size: 20
            });
            if (p === 1) setItems(res.results ?? []);
            else setItems((prev)=>[
                    ...prev,
                    ...res.results ?? []
                ]);
            setHasMore(!!res.next);
        } catch (e) {
            console.error(e);
        } finally{
            setLoading(false);
        }
    }, [
        user?.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load(1);
    }, [
        load
    ]);
    const getEquipmentName = (item)=>{
        const eq = item.equipment;
        if (!eq) return '—';
        const brand = eq.brand_name ?? '';
        const model = eq.model ?? '';
        if (brand && model) return `${brand} / ${model}`;
        return brand || model || '—';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeaderNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderNav"], {
                title: "Просроченные задачи"
            }, void 0, false, {
                fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pt-4 pb-12",
                children: loading && items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Загрузка..."
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                        lineNumber: 58,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                    lineNumber: 57,
                    columnNumber: 21
                }, this) : items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-20 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 bg-green-50 rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdBuild"], {
                                className: "w-8 h-8 text-green-400"
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                                lineNumber: 63,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                            lineNumber: 62,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-center",
                            children: "Нет просроченных задач! 🎉"
                        }, void 0, false, {
                            fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                            lineNumber: 65,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                    lineNumber: 61,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push(`/techniques/${item.equipment.id}/maintenance/${item.id}`),
                                className: "w-full text-left bg-red-50 border border-red-100 rounded-2xl p-4 hover:bg-red-100 transition active:scale-[0.99]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdWarning"], {
                                                className: "w-4 h-4 text-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-gray-700 text-base truncate",
                                                    children: item.plan_title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-600 mt-0.5",
                                                    children: getEquipmentName(item)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-red-500 mt-1 font-medium",
                                                    children: [
                                                        "Дата: ",
                                                        new Date(item.scheduled_date).toLocaleDateString('ru-RU', {
                                                            day: 'numeric',
                                                            month: 'long'
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 33
                                }, this)
                            }, item.id, false, {
                                fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                                lineNumber: 70,
                                columnNumber: 29
                            }, this)),
                        hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                const next = page + 1;
                                setPage(next);
                                load(next);
                            },
                            className: "w-full py-3 text-primary-500 font-medium text-sm",
                            children: loading ? 'Загрузка...' : 'Загрузить ещё'
                        }, void 0, false, {
                            fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                            lineNumber: 91,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                    lineNumber: 68,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(tabs)/home/overdue/page.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_3114610b._.js.map
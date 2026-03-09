(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/notificationsApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNotification",
    ()=>getNotification,
    "getNotifications",
    ()=>getNotifications,
    "getUnreadCount",
    ()=>getUnreadCount,
    "markAllRead",
    ()=>markAllRead,
    "markAsRead",
    ()=>markAsRead
]);
const API_BASE_URL = '/api';
function getAuthToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem('akfa_access_token');
}
async function fetchAPI(endpoint, options = {}) {
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
        const text = await response.text();
        throw new Error(`API Error ${response.status}: ${text}`);
    }
    if (response.status === 204) return null;
    return response.json();
}
async function getNotifications() {
    return fetchAPI('/v1/notifications');
}
async function getNotification(id) {
    return fetchAPI(`/v1/notifications/${id}`);
}
async function getUnreadCount() {
    return fetchAPI('/v1/notifications/unread_count');
}
async function markAsRead(id) {
    return fetchAPI(`/v1/notifications/${id}/read`, {
        method: 'POST'
    });
}
async function markAllRead() {
    return fetchAPI('/v1/notifications/mark_all_read', {
        method: 'POST'
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/bannersApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBanner",
    ()=>getBanner,
    "getBanners",
    ()=>getBanners
]);
const API_BASE_URL = '/api';
function getAuthToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem('akfa_access_token');
}
async function fetchAPI(endpoint, options = {}) {
    const token = getAuthToken();
    const config = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...token ? {
                Authorization: `Bearer ${token}`
            } : {},
            ...options.headers
        }
    };
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, config);
    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }
    return response.json();
}
async function getBanners() {
    const resp = await fetchAPI('/v1/banners');
    return resp?.results ?? [];
}
async function getBanner(id) {
    return fetchAPI(`/v1/banners/${id}`);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BannerSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BannerSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bannersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/bannersApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function BannerSlider() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [banners, setBanners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BannerSlider.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bannersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBanners"])().then(setBanners).catch(console.error);
        }
    }["BannerSlider.useEffect"], []);
    if (!banners.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-3 overflow-x-auto snap-x snap-mandatory",
        style: {
            scrollbarWidth: 'none'
        },
        children: banners.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 snap-start rounded-3xl overflow-hidden cursor-pointer bg-gray-200",
                style: {
                    width: 'calc(100% - 48px)',
                    aspectRatio: '2/1'
                },
                onClick: ()=>router.push(`/home/banners/${b.id}`),
                children: b.image ? // eslint-disable-next-line @next/next/no-img-element
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: b.image,
                    alt: b.title,
                    className: "w-full h-full object-cover",
                    draggable: false
                }, void 0, false, {
                    fileName: "[project]/components/BannerSlider.tsx",
                    lineNumber: 31,
                    columnNumber: 25
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full bg-primary-500 flex items-end p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white font-bold",
                        children: b.title
                    }, void 0, false, {
                        fileName: "[project]/components/BannerSlider.tsx",
                        lineNumber: 34,
                        columnNumber: 29
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/BannerSlider.tsx",
                    lineNumber: 33,
                    columnNumber: 25
                }, this)
            }, b.id, false, {
                fileName: "[project]/components/BannerSlider.tsx",
                lineNumber: 23,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/BannerSlider.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s(BannerSlider, "Tsy1efePSIWYgemTGxdMzHHuNB8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BannerSlider;
var _c;
__turbopack_context__.k.register(_c, "BannerSlider");
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
"[project]/components/HomeStats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/techniqueApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function HomeStats() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [overdue, setOverdue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [today, setToday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inProgress, setInProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeStats.useEffect": ()=>{
            if (!user?.id) return;
            const todayStr = new Date().toISOString().split('T')[0];
            Promise.allSettled([
                // Overdue tasks
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaintenanceInstances"])({
                    status: 'overdue',
                    'equipment__responsible': user.id.toString(),
                    page_size: 1
                }),
                // Today's tasks
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaintenanceInstances"])({
                    scheduled_date_after: todayStr,
                    scheduled_date_before: todayStr,
                    'equipment__responsible': user.id.toString(),
                    page_size: 1
                }),
                // Total equipment
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTechniqueList"])({
                    responsible: user.id.toString(),
                    page_size: 1
                }),
                // In-progress tasks
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaintenanceInstances"])({
                    status: 'in_progress',
                    'equipment__responsible': user.id.toString(),
                    page_size: 1
                })
            ]).then({
                "HomeStats.useEffect": ([over, tod, eq, inp])=>{
                    setOverdue(over.status === 'fulfilled' ? over.value.count ?? 0 : 0);
                    setToday(tod.status === 'fulfilled' ? tod.value.count ?? 0 : 0);
                    setTotal(eq.status === 'fulfilled' ? eq.value.count ?? 0 : 0);
                    setInProgress(inp.status === 'fulfilled' ? inp.value.count ?? 0 : 0);
                }
            }["HomeStats.useEffect"]);
        }
    }["HomeStats.useEffect"], [
        user?.id
    ]);
    const stats = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdWarning"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/components/HomeStats.tsx",
                lineNumber: 66,
                columnNumber: 19
            }, this),
            label: 'Просрочено',
            value: overdue ?? '—',
            color: overdue ? 'bg-red-50' : 'bg-primary-100',
            textColor: overdue ? 'text-red-500' : 'text-primary-500',
            href: '/home/overdue'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdToday"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/components/HomeStats.tsx",
                lineNumber: 74,
                columnNumber: 19
            }, this),
            label: 'На сегодня',
            value: today ?? '—',
            color: 'bg-primary-100',
            textColor: 'text-primary-500',
            href: '/home/today'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdBuild"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/components/HomeStats.tsx",
                lineNumber: 82,
                columnNumber: 19
            }, this),
            label: 'Мои техники',
            value: total ?? '—',
            color: 'bg-primary-100',
            textColor: 'text-primary-500',
            href: user?.id ? `/techniques?responsible=${user.id}` : '/techniques'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-3 px-4",
                children: stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push(s.href),
                        className: `${s.color} rounded-2xl p-3 flex flex-col gap-1.5 text-left active:scale-95 transition`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: s.textColor,
                                children: s.icon
                            }, void 0, false, {
                                fileName: "[project]/components/HomeStats.tsx",
                                lineNumber: 101,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-xl font-bold leading-none ${s.textColor}`,
                                children: s.value
                            }, void 0, false, {
                                fileName: "[project]/components/HomeStats.tsx",
                                lineNumber: 102,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-gray-600 leading-tight",
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/components/HomeStats.tsx",
                                lineNumber: 105,
                                columnNumber: 25
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/components/HomeStats.tsx",
                        lineNumber: 96,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/HomeStats.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            (inProgress ?? 0) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push('/home/in-progress'),
                    className: "w-full bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex items-center gap-3 hover:bg-yellow-100 transition active:scale-[0.99] text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdBuild"], {
                                className: "w-5 h-5 text-yellow-600"
                            }, void 0, false, {
                                fileName: "[project]/components/HomeStats.tsx",
                                lineNumber: 118,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/HomeStats.tsx",
                            lineNumber: 117,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-yellow-800 text-sm",
                                    children: [
                                        "У вас ",
                                        inProgress,
                                        " Тех обслужование в процессе"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeStats.tsx",
                                    lineNumber: 121,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-yellow-600 mt-0.5",
                                    children: "Нажмите чтобы посмотреть"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeStats.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeStats.tsx",
                            lineNumber: 120,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronRight"], {
                            className: "w-5 h-5 text-yellow-400 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/components/HomeStats.tsx",
                            lineNumber: 126,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomeStats.tsx",
                    lineNumber: 113,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HomeStats.tsx",
                lineNumber: 112,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HomeStats.tsx",
        lineNumber: 92,
        columnNumber: 9
    }, this);
}
_s(HomeStats, "I1mJUf01xubsU9IUpvRrnrjt+mg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = HomeStats;
var _c;
__turbopack_context__.k.register(_c, "HomeStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HomeTeam.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeTeam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/techniqueApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const ROLE_LABELS = {
    admin: 'Администратор',
    engineer: 'Инженер',
    technician: 'Техник',
    manager: 'Менеджер',
    worker: 'Рабочий'
};
function HomeTeam() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeTeam.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUsers"])().then({
                "HomeTeam.useEffect": (data)=>{
                    const list = data?.results ?? data ?? [];
                    setUsers(Array.isArray(list) ? list.slice(0, 20) : []);
                }
            }["HomeTeam.useEffect"]).catch(console.error);
        }
    }["HomeTeam.useEffect"], []);
    if (users.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-bold text-gray-800",
                        children: "Люди на заводе"
                    }, void 0, false, {
                        fileName: "[project]/components/HomeTeam.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/home/team'),
                        className: "flex items-center gap-0.5 text-primary-500 text-xs font-medium",
                        children: [
                            "Смотреть все ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/components/HomeTeam.tsx",
                                lineNumber: 48,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HomeTeam.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HomeTeam.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide snap-x snap-mandatory",
                children: users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push(`/responsible/${user.id}`),
                        className: "flex flex-col items-center gap-1.5 snap-start shrink-0 w-20 active:scale-95 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-full bg-primary-100 overflow-hidden flex items-center justify-center shrink-0",
                                children: user.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: user.avatar,
                                    alt: user.full_name,
                                    width: 64,
                                    height: 64,
                                    className: "w-full h-full object-cover",
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeTeam.tsx",
                                    lineNumber: 63,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdPerson"], {
                                    className: "w-8 h-8 text-primary-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeTeam.tsx",
                                    lineNumber: 72,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/HomeTeam.tsx",
                                lineNumber: 61,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-semibold text-gray-800 text-center leading-tight line-clamp-2 w-full h-8 flex items-start justify-center",
                                children: user.full_name || '—'
                            }, void 0, false, {
                                fileName: "[project]/components/HomeTeam.tsx",
                                lineNumber: 76,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-gray-400 text-center leading-tight",
                                children: ROLE_LABELS[user.role] ?? user.role ?? ''
                            }, void 0, false, {
                                fileName: "[project]/components/HomeTeam.tsx",
                                lineNumber: 80,
                                columnNumber: 25
                            }, this)
                        ]
                    }, user.id, true, {
                        fileName: "[project]/components/HomeTeam.tsx",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/HomeTeam.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HomeTeam.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_s(HomeTeam, "QEDEtAuiw95Tj5QDRH9Gngasdu0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HomeTeam;
var _c;
__turbopack_context__.k.register(_c, "HomeTeam");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(tabs)/home/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notificationsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/notificationsApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BannerSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BannerSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HomeStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HomeStats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HomeTeam$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HomeTeam.tsx [app-client] (ecmascript)");
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
function HomePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notificationsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnreadCount"])().then({
                "HomePage.useEffect": (data)=>setUnreadCount(data.unread_count)
            }["HomePage.useEffect"]).catch({
                "HomePage.useEffect": ()=>{}
            }["HomePage.useEffect"]);
        }
    }["HomePage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 pt-4 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-dark",
                        children: "Главная"
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/home/page.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/home/notifications'),
                        className: "relative w-11 h-11 flex items-center justify-center rounded-2xl bg-primary-50 hover:bg-primary-100 transition active:scale-95",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdNotifications"], {
                                className: "w-6 h-6 text-primary-500"
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/home/page.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this),
                            unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center",
                                children: unreadCount > 99 ? '99+' : unreadCount
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/home/page.tsx",
                                lineNumber: 33,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/home/page.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(tabs)/home/page.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push('/home/notifications'),
                    className: "w-full bg-primary-50 border border-primary-100 rounded-2xl p-4 flex items-center gap-3 hover:bg-primary-100 transition active:scale-[0.99] text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdNotifications"], {
                                className: "w-5 h-5 text-white"
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/home/page.tsx",
                                lineNumber: 48,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(tabs)/home/page.tsx",
                            lineNumber: 47,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-dark text-sm",
                                    children: "Новые уведомления"
                                }, void 0, false, {
                                    fileName: "[project]/app/(tabs)/home/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: [
                                        "У вас ",
                                        unreadCount,
                                        " непрочитанн",
                                        unreadCount === 1 ? 'ое' : 'ых',
                                        " уведомлений"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(tabs)/home/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(tabs)/home/page.tsx",
                            lineNumber: 50,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(tabs)/home/page.tsx",
                    lineNumber: 43,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(tabs)/home/page.tsx",
                lineNumber: 42,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BannerSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(tabs)/home/page.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(tabs)/home/page.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HomeStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(tabs)/home/page.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(tabs)/home/page.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HomeTeam$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(tabs)/home/page.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(tabs)/home/page.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_s(HomePage, "DUvY7cmzyH8BtiUVQ6m2rv303gc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_48572353._.js.map
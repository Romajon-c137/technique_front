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
"[project]/app/(tabs)/home/notifications/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotificationDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notificationsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/notificationsApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/techniqueApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// ── Config ───────────────────────────────────────────────────────────────────
const TYPE_CONFIG = {
    maintenance_today: {
        cardBg: 'bg-orange-50',
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-500',
        badge: 'bg-orange-500',
        badgeText: 'Сегодня',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdWarningAmber"]
    },
    maintenance_overdue: {
        cardBg: 'bg-red-50',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-500',
        badge: 'bg-red-500',
        badgeText: 'Просрочено',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdErrorOutline"]
    },
    manual: {
        cardBg: 'bg-blue-50',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-500',
        badge: 'bg-blue-500',
        badgeText: 'Уведомление',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdInfoOutline"]
    }
};
// ── Element renderers ─────────────────────────────────────────────────────────
function TextBlock({ text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-gray-700 leading-relaxed whitespace-pre-wrap",
        children: text
    }, void 0, false, {
        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
        lineNumber: 43,
        columnNumber: 12
    }, this);
}
_c = TextBlock;
function ImageBlock({ src, alt }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full rounded-2xl overflow-hidden bg-gray-100",
        style: {
            aspectRatio: '16/9'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            className: "w-full h-full object-contain"
        }, void 0, false, {
            fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
_c1 = ImageBlock;
function VideoBlock({ url }) {
    const ytId = url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/)?.[1];
    const vimeoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
    if (ytId) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full rounded-2xl overflow-hidden",
        style: {
            aspectRatio: '16/9'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: `https://www.youtube.com/embed/${ytId}`,
            className: "w-full h-full",
            allowFullScreen: true,
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        }, void 0, false, {
            fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
            lineNumber: 61,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
    if (vimeoId) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full rounded-2xl overflow-hidden",
        style: {
            aspectRatio: '16/9'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: `https://player.vimeo.com/video/${vimeoId}`,
            className: "w-full h-full",
            allowFullScreen: true
        }, void 0, false, {
            fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
            lineNumber: 66,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
        src: url,
        controls: true,
        className: "w-full rounded-2xl bg-black"
    }, void 0, false, {
        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
        lineNumber: 69,
        columnNumber: 12
    }, this);
}
_c2 = VideoBlock;
function renderElement(el, idx) {
    switch(el.element_type){
        case 'text':
            return el.text_content ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextBlock, {
                text: el.text_content
            }, el.id, false, {
                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                lineNumber: 74,
                columnNumber: 47
            }, this) : null;
        case 'image':
            return el.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageBlock, {
                src: el.image,
                alt: `Фото ${idx + 1}`
            }, el.id, false, {
                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                lineNumber: 75,
                columnNumber: 41
            }, this) : null;
        case 'video':
            return el.video_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoBlock, {
                url: el.video_url
            }, el.id, false, {
                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                lineNumber: 76,
                columnNumber: 45
            }, this) : null;
        default:
            return null;
    }
}
// ── Technique card (for maintenance notifications) ────────────────────────────
function TechniqueCard({ technique, instance, cfg }) {
    const firstImage = technique.images?.[0]?.image ?? null;
    // API returns brand as object {id, name} and tag as single object (not array)
    const brandName = technique.brand?.name ?? technique.brand_name ?? '';
    const tagName = technique.tag?.name ?? '';
    const schedDate = new Date(instance.scheduled_date).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-2xl overflow-hidden ${cfg.cardBg} border border-white`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full bg-gray-100 overflow-hidden",
                style: {
                    height: 180
                },
                children: [
                    firstImage ? // eslint-disable-next-line @next/next/no-img-element
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: firstImage,
                        alt: technique.model,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 102,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdBuild"], {
                            className: "w-12 h-12 text-gray-300"
                        }, void 0, false, {
                            fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                            lineNumber: 105,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 104,
                        columnNumber: 21
                    }, this),
                    tagName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-3 right-3 bg-primary-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full",
                        children: tagName
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 109,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold text-dark text-base",
                        children: [
                            brandName,
                            " ",
                            technique.model
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mt-1.5 text-xs text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCalendarToday"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                                lineNumber: 121,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    instance.plan_type_display,
                                    " ТО: ",
                                    schedDate
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                                lineNumber: 122,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, this),
                    instance.plan_title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-gray-400 line-clamp-1",
                        children: instance.plan_title
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 127,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
        lineNumber: 97,
        columnNumber: 9
    }, this);
}
_c3 = TechniqueCard;
function NotificationDetailPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const id = params.id;
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [technique, setTechnique] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [instance, setInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationDetailPage.useCallback[load]": async ()=>{
            try {
                // Load notification
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notificationsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotification"])(id);
                setNotification(data);
                if (!data.is_read) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notificationsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAsRead"])(id);
                    setNotification({
                        "NotificationDetailPage.useCallback[load]": (prev)=>prev ? {
                                ...prev,
                                is_read: true
                            } : prev
                    }["NotificationDetailPage.useCallback[load]"]);
                }
                // For maintenance notifications — load technique + instance
                if ((data.type === 'maintenance_today' || data.type === 'maintenance_overdue') && data.related_equipment_id && data.related_instance_id) {
                    const [tech, inst] = await Promise.all([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTechniqueById"])(data.related_equipment_id),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$techniqueApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaintenanceInstance"])(data.related_instance_id)
                    ]);
                    setTechnique(tech);
                    setInstance(inst);
                }
            } catch  {
                router.back();
            } finally{
                setLoading(false);
            }
        }
    }["NotificationDetailPage.useCallback[load]"], [
        id,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationDetailPage.useEffect": ()=>{
            load();
        }
    }["NotificationDetailPage.useEffect"], [
        load
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400",
                children: "Загрузка..."
            }, void 0, false, {
                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                lineNumber: 182,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
            lineNumber: 181,
            columnNumber: 13
        }, this);
    }
    if (!notification) return null;
    const cfg = TYPE_CONFIG[notification.type] ?? TYPE_CONFIG.manual;
    const Icon = cfg.icon;
    const isMaintenance = notification.type === 'maintenance_today' || notification.type === 'maintenance_overdue';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-1 pt-4 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.back(),
                        className: "w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdArrowBack"], {
                            className: "w-6 h-6 text-gray-600"
                        }, void 0, false, {
                            fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                            lineNumber: 201,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 197,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-8 h-8 rounded-full flex items-center justify-center ${cfg.iconBg}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: `w-5 h-5 ${cfg.iconColor}`
                        }, void 0, false, {
                            fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                            lineNumber: 204,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 203,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[11px] font-semibold px-2 py-0.5 rounded-full text-white ${cfg.badge}`,
                                children: cfg.badgeText
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                                lineNumber: 207,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-gray-400 mt-0.5",
                                children: new Date(notification.created_at).toLocaleString('ru-RU', {
                                    day: 'numeric',
                                    month: 'long',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                                lineNumber: 210,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 206,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                lineNumber: 196,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rounded-2xl p-4 mb-5 ${cfg.cardBg} flex gap-3 items-start`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${cfg.iconBg}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: `w-5 h-5 ${cfg.iconColor}`
                        }, void 0, false, {
                            fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                            lineNumber: 221,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 220,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-dark",
                                children: notification.title
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                                lineNumber: 224,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-0.5 leading-relaxed",
                                children: notification.body
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                                lineNumber: 225,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 223,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                lineNumber: 219,
                columnNumber: 13
            }, this),
            isMaintenance && technique && instance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechniqueCard, {
                        technique: technique,
                        instance: instance,
                        cfg: cfg
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 232,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push(`/techniques/${notification.related_equipment_id}/maintenance/${notification.related_instance_id}`),
                                className: "w-full py-3.5 rounded-2xl border-2 border-primary-500 text-primary-500 font-semibold text-sm hover:bg-primary-50 transition active:scale-[0.99]",
                                children: "Открыть ТО"
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                                lineNumber: 236,
                                columnNumber: 25
                            }, this),
                            notification.type === 'maintenance_overdue' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push(`/techniques/${notification.related_equipment_id}/maintenance/${notification.related_instance_id}`),
                                className: "w-full py-3.5 rounded-2xl bg-red-500 text-white font-semibold text-sm hover:bg-red-600 transition active:scale-[0.99]",
                                children: "Завершить ТО"
                            }, void 0, false, {
                                fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                                lineNumber: 247,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 234,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true),
            !isMaintenance && notification.elements.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-100 mb-5"
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 263,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: notification.elements.sort((a, b)=>a.order - b.order).map((el, idx)=>renderElement(el, idx))
                    }, void 0, false, {
                        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
                        lineNumber: 264,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(tabs)/home/notifications/[id]/page.tsx",
        lineNumber: 194,
        columnNumber: 9
    }, this);
}
_s(NotificationDetailPage, "EykMCi8xJUh+z7pg2NqSSdA/vus=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c4 = NotificationDetailPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "TextBlock");
__turbopack_context__.k.register(_c1, "ImageBlock");
__turbopack_context__.k.register(_c2, "VideoBlock");
__turbopack_context__.k.register(_c3, "TechniqueCard");
__turbopack_context__.k.register(_c4, "NotificationDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_136725b0._.js.map
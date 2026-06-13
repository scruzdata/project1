(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/cruise-lines/cruise-lines.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "atmosphereLabel",
    ()=>atmosphereLabel,
    "atmosphereLabelShort",
    ()=>atmosphereLabelShort,
    "categoryLabel",
    ()=>categoryLabel,
    "scoreFields",
    ()=>scoreFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chef-hat.js [app-client] (ecmascript) <export default as ChefHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$concierge$2d$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConciergeBell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/concierge-bell.js [app-client] (ecmascript) <export default as ConciergeBell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ship.js [app-client] (ecmascript) <export default as Ship>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music-2.js [app-client] (ecmascript) <export default as Music2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-dollar-sign.js [app-client] (ecmascript) <export default as BadgeDollarSign>");
;
const scoreFields = [
    {
        key: "overallScore",
        label: "Puntuación general",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
    },
    {
        key: "foodScore",
        label: "Gastronomía",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"]
    },
    {
        key: "serviceScore",
        label: "Servicio",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$concierge$2d$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConciergeBell$3e$__["ConciergeBell"]
    },
    {
        key: "shipScore",
        label: "Barcos",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__["Ship"]
    },
    {
        key: "entertainmentScore",
        label: "Entretenimiento",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"]
    },
    {
        key: "tranquilityScore",
        label: "Tranquilidad",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"]
    },
    {
        key: "valueScore",
        label: "Calidad-precio",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeDollarSign$3e$__["BadgeDollarSign"]
    }
];
const categoryLabel = {
    luxury: "Lujo",
    premium: "Premium",
    mainstream: "Estándar"
};
const atmosphereLabel = {
    relaxed: "Ambiente relajado y tranquilo",
    classic: "Ambiente clásico y tradicional",
    family: "Familiar y animado",
    active: "Activo y dinámico"
};
const atmosphereLabelShort = {
    relaxed: "Relajado",
    classic: "Clásico",
    family: "Familiar",
    active: "Activo"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/cruise-lines/components/CruiseLineCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CruiseLineCard",
    ()=>CruiseLineCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$cruise$2d$lines$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cruise-lines/cruise-lines.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
;
function CruiseLineCard(param) {
    let { cruiseLine } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/cruise-lines/".concat(cruiseLine.id),
        className: "block h-full group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("card-elevated h-full flex flex-col overflow-hidden", cruiseLine.recommended && "ring-1 ring-accent/40"),
            children: [
                cruiseLine.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-muted",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: cruiseLine.image,
                        alt: cruiseLine.name,
                        fill: true,
                        className: "object-cover transition-transform duration-500 group-hover:scale-105",
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    }, void 0, false, {
                        fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-5 p-6 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5 min-w-0",
                                    children: [
                                        cruiseLine.recommended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "h-3.5 w-3.5 text-accent fill-current shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "eyebrow",
                                                    children: "Nuestra elección"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "heading-4 group-hover:text-accent transition-colors duration-200 truncate",
                                            children: cruiseLine.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                            lineNumber: 46,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                    lineNumber: 39,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shrink-0 flex flex-col items-center rounded-2xl bg-accent/10 px-3.5 py-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-heading text-2xl font-bold text-accent leading-none",
                                            children: cruiseLine.overallScore.toFixed(1)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                            lineNumber: 53,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "caption mt-0.5",
                                            children: "/ 10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                            lineNumber: 56,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                    lineNumber: 52,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                            lineNumber: 38,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$cruise$2d$lines$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryLabel"][cruiseLine.category]
                                }, void 0, false, {
                                    fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                    lineNumber: 62,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$cruise$2d$lines$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atmosphereLabelShort"][cruiseLine.atmosphere]
                                }, void 0, false, {
                                    fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                    lineNumber: 65,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                            lineNumber: 61,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex-1 space-y-2",
                            children: cruiseLine.strengths.slice(0, 3).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "h-4 w-4 text-accent mt-0.5 shrink-0",
                                            strokeWidth: 1.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground leading-snug",
                                            children: s
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, s, true, {
                                    fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                            lineNumber: 71,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-200 group-hover:gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Ver detalles"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                    lineNumber: 82,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                                    lineNumber: 83,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                            lineNumber: 81,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/cruise-lines/components/CruiseLineCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = CruiseLineCard;
var _c;
__turbopack_context__.k.register(_c, "CruiseLineCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/cruise-lines/components/CruiseLineGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CruiseLineGrid",
    ()=>CruiseLineGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$components$2f$CruiseLineCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cruise-lines/components/CruiseLineCard.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function CruiseLineGrid(param) {
    let { cruiseLines } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
        children: cruiseLines.map((cl, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 24
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [
                        0.25,
                        0.46,
                        0.45,
                        0.94
                    ]
                },
                className: "h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$components$2f$CruiseLineCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CruiseLineCard"], {
                    cruiseLine: cl
                }, void 0, false, {
                    fileName: "[project]/src/features/cruise-lines/components/CruiseLineGrid.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, this)
            }, cl.id, false, {
                fileName: "[project]/src/features/cruise-lines/components/CruiseLineGrid.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/features/cruise-lines/components/CruiseLineGrid.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = CruiseLineGrid;
var _c;
__turbopack_context__.k.register(_c, "CruiseLineGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/comparisonMetrics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comparisonMetrics",
    ()=>comparisonMetrics
]);
const comparisonMetrics = [
    {
        key: "overallScore",
        label: "General",
        description: "Valoración global de la compañía",
        type: "score",
        sortable: true
    },
    {
        key: "foodScore",
        label: "Gastronomía",
        description: "Calidad de la comida y restaurantes a bordo",
        type: "score",
        sortable: true
    },
    {
        key: "serviceScore",
        label: "Servicio",
        description: "Atención y amabilidad del personal",
        type: "score",
        sortable: true
    },
    {
        key: "shipScore",
        label: "Barco",
        description: "Calidad de las instalaciones y camarotes",
        type: "score",
        sortable: true
    },
    {
        key: "entertainmentScore",
        label: "Entretenimiento",
        description: "Actividades y espectáculos a bordo",
        type: "score",
        sortable: true
    },
    {
        key: "tranquilityScore",
        label: "Tranquilidad",
        description: "Ambiente sereno, ideal para el descanso",
        type: "score",
        sortable: true
    },
    {
        key: "valueScore",
        label: "Calidad-precio",
        description: "Relación entre el precio y la calidad ofrecida",
        type: "score",
        sortable: true
    },
    {
        key: "category",
        label: "Categoría",
        description: "Segmento de mercado: lujo, premium o estándar",
        type: "badge",
        sortable: true
    },
    {
        key: "atmosphere",
        label: "Ambiente",
        description: "Tipo de ambiente predominante a bordo",
        type: "badge",
        sortable: false
    },
    {
        key: "averagePassengerAge",
        label: "Perfil de edad",
        description: "Rango de edad predominante de los pasajeros",
        type: "text",
        sortable: false
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/cruise-lines/components/ComparisonTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComparisonTable",
    ()=>ComparisonTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-client] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$comparisonMetrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/comparisonMetrics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$cruise$2d$lines$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cruise-lines/cruise-lines.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// ── Score cell appearance ──────────────────────────────────────
const SCORE_THRESHOLDS = [
    {
        min: 9.5,
        text: "text-emerald-600 dark:text-emerald-400",
        bar: "bg-emerald-500"
    },
    {
        min: 8.5,
        text: "text-emerald-600 dark:text-emerald-400",
        bar: "bg-emerald-400"
    },
    {
        min: 7.5,
        text: "text-amber-600 dark:text-amber-400",
        bar: "bg-amber-400"
    },
    {
        min: 6.5,
        text: "text-orange-600 dark:text-orange-400",
        bar: "bg-orange-400"
    },
    {
        min: 0,
        text: "text-red-600 dark:text-red-400",
        bar: "bg-red-400"
    }
];
function getScoreColors(score) {
    var _SCORE_THRESHOLDS_find;
    return (_SCORE_THRESHOLDS_find = SCORE_THRESHOLDS.find((t)=>score >= t.min)) !== null && _SCORE_THRESHOLDS_find !== void 0 ? _SCORE_THRESHOLDS_find : SCORE_THRESHOLDS[SCORE_THRESHOLDS.length - 1];
}
// ── Badge styles ───────────────────────────────────────────────
const CATEGORY_CHIP = {
    luxury: "bg-gold-400/15 text-gold-600 border border-gold-400/30",
    premium: "bg-navy-500/10 text-navy-400 border border-navy-400/30",
    mainstream: "bg-muted text-muted-foreground border border-border"
};
const ATMOSPHERE_CHIP = {
    relaxed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
    classic: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20",
    family: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20",
    active: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
};
const SCORE_KEYS = [
    "overallScore",
    "foodScore",
    "serviceScore",
    "shipScore",
    "entertainmentScore",
    "tranquilityScore",
    "valueScore"
];
function ComparisonTable(param) {
    let { cruiseLines } = param;
    _s();
    const [sortKey, setSortKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overallScore");
    const [sortDir, setSortDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("desc");
    const [filterCategory, setFilterCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filterAtmosphere, setFilterAtmosphere] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [recommendedOnly, setRecommendedOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function handleSort(key) {
        if (sortKey === key) {
            setSortDir((prev)=>prev === "desc" ? "asc" : "desc");
        } else {
            setSortKey(key);
            setSortDir("desc");
        }
    }
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonTable.useMemo[filtered]": ()=>{
            let result = [
                ...cruiseLines
            ];
            if (filterCategory !== "all") {
                result = result.filter({
                    "ComparisonTable.useMemo[filtered]": (c)=>c.category === filterCategory
                }["ComparisonTable.useMemo[filtered]"]);
            }
            if (filterAtmosphere !== "all") {
                result = result.filter({
                    "ComparisonTable.useMemo[filtered]": (c)=>c.atmosphere === filterAtmosphere
                }["ComparisonTable.useMemo[filtered]"]);
            }
            if (recommendedOnly) {
                result = result.filter({
                    "ComparisonTable.useMemo[filtered]": (c)=>c.recommended
                }["ComparisonTable.useMemo[filtered]"]);
            }
            result.sort({
                "ComparisonTable.useMemo[filtered]": (a, b)=>{
                    if (sortKey === "name") {
                        return sortDir === "desc" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);
                    }
                    if (sortKey === "category") {
                        return sortDir === "desc" ? b.category.localeCompare(a.category) : a.category.localeCompare(b.category);
                    }
                    const aScore = a[sortKey];
                    const bScore = b[sortKey];
                    return sortDir === "desc" ? bScore - aScore : aScore - bScore;
                }
            }["ComparisonTable.useMemo[filtered]"]);
            return result;
        }
    }["ComparisonTable.useMemo[filtered]"], [
        cruiseLines,
        sortKey,
        sortDir,
        filterCategory,
        filterAtmosphere,
        recommendedOnly
    ]);
    // Best score per column (computed across all cruise lines, not just filtered)
    const bestScores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparisonTable.useMemo[bestScores]": ()=>{
            const result = {};
            for (const key of SCORE_KEYS){
                result[key] = Math.max(...cruiseLines.map({
                    "ComparisonTable.useMemo[bestScores]": (c)=>c[key]
                }["ComparisonTable.useMemo[bestScores]"]));
            }
            return result;
        }
    }["ComparisonTable.useMemo[bestScores]"], [
        cruiseLines
    ]);
    const scoreMetrics = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$comparisonMetrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comparisonMetrics"].filter((m)=>m.type === "score");
    const otherMetrics = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$comparisonMetrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comparisonMetrics"].filter((m)=>m.type !== "score");
    const totalCols = 1 + scoreMetrics.length + otherMetrics.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-x-8 gap-y-4 p-5 rounded-2xl bg-muted/30 border border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterGroup, {
                        label: "Categoría",
                        children: [
                            "all",
                            "luxury",
                            "premium",
                            "mainstream"
                        ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChip, {
                                active: filterCategory === cat,
                                onClick: ()=>setFilterCategory(cat),
                                children: cat === "all" ? "Todas" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$cruise$2d$lines$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryLabel"][cat]
                            }, cat, false, {
                                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterGroup, {
                        label: "Ambiente",
                        children: [
                            "all",
                            "relaxed",
                            "classic",
                            "active"
                        ].map((atm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChip, {
                                active: filterAtmosphere === atm,
                                onClick: ()=>setFilterAtmosphere(atm),
                                children: atm === "all" ? "Todos" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$cruise$2d$lines$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atmosphereLabelShort"][atm]
                            }, atm, false, {
                                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterGroup, {
                        label: "Mostrar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChip, {
                            active: recommendedOnly,
                            onClick: ()=>setRecommendedOnly((p)=>!p),
                            accent: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                    className: "h-3 w-3 shrink-0",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                "Solo recomendados"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: filtered.length === cruiseLines.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        cruiseLines.length,
                        " compañías"
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-foreground",
                            children: filtered.length
                        }, void 0, false, {
                            fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this),
                        " de ",
                        cruiseLines.length,
                        " compañías"
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto rounded-2xl border border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full min-w-[960px] border-collapse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-border bg-muted/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "col",
                                        className: "sticky left-0 z-10 bg-muted/30 px-4 py-3 text-left w-[164px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortButton, {
                                            label: "Compañía",
                                            isSorted: sortKey === "name",
                                            dir: sortDir,
                                            onClick: ()=>handleSort("name")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    scoreMetrics.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            scope: "col",
                                            title: m.description,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-3 text-center min-w-[76px]", sortKey === m.key && "bg-accent/5"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortButton, {
                                                label: m.label,
                                                isSorted: sortKey === m.key,
                                                dir: sortDir,
                                                onClick: ()=>handleSort(m.key),
                                                center: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                lineNumber: 218,
                                                columnNumber: 19
                                            }, this)
                                        }, m.key, false, {
                                            fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this)),
                                    otherMetrics.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            scope: "col",
                                            title: m.description,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-3 text-center", m.key === "category" && "min-w-[108px]", m.key === "atmosphere" && "min-w-[100px]", m.key === "averagePassengerAge" && "min-w-[90px]", m.sortable && sortKey === m.key && "bg-accent/5"),
                                            children: m.sortable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortButton, {
                                                label: m.label,
                                                isSorted: sortKey === m.key,
                                                dir: sortDir,
                                                onClick: ()=>handleSort(m.key),
                                                center: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                lineNumber: 243,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
                                                children: m.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                lineNumber: 251,
                                                columnNumber: 21
                                            }, this)
                                        }, m.key, false, {
                                            fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: totalCols,
                                    className: "px-4 py-16 text-center text-sm text-muted-foreground",
                                    children: "Ninguna compañía coincide con los filtros seleccionados."
                                }, void 0, false, {
                                    fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                    lineNumber: 263,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                lineNumber: 262,
                                columnNumber: 15
                            }, this) : filtered.map((cl, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].tr, {
                                    initial: {
                                        opacity: 0,
                                        y: 6
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: idx * 0.04,
                                        duration: 0.25,
                                        ease: [
                                            0.25,
                                            0.46,
                                            0.45,
                                            0.94
                                        ]
                                    },
                                    className: "group border-b border-border last:border-0 hover:bg-muted/30 transition-colors duration-150",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "sticky left-0 z-10 bg-card group-hover:bg-muted/30 transition-colors duration-150 px-4 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            cl.recommended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-1.5 w-1.5 rounded-full bg-accent shrink-0",
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold leading-snug",
                                                                children: cl.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 23
                                                    }, this),
                                                    cl.recommended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-semibold uppercase tracking-wider text-accent pl-3.5",
                                                        children: "Recomendado"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                lineNumber: 285,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, this),
                                        scoreMetrics.map((m)=>{
                                            const score = cl[m.key];
                                            const { text, bar } = getScoreColors(score);
                                            const isBest = score === bestScores[m.key];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-4 text-center", sortKey === m.key && "bg-accent/5"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative font-heading text-base font-semibold leading-none tabular-nums", text),
                                                            children: [
                                                                score.toFixed(1),
                                                                isBest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute -top-1 -right-2 text-[9px] leading-none text-accent",
                                                                    "aria-label": "Mejor puntuación",
                                                                    children: "★"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                                    lineNumber: 328,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-1 rounded-full bg-muted overflow-hidden",
                                                            role: "meter",
                                                            "aria-valuenow": score,
                                                            "aria-valuemin": 0,
                                                            "aria-valuemax": 10,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full rounded-full", bar),
                                                                style: {
                                                                    width: "".concat(score * 10, "%")
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 25
                                                }, this)
                                            }, m.key, false, {
                                                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                lineNumber: 312,
                                                columnNumber: 23
                                            }, this);
                                        }),
                                        otherMetrics.map((m)=>{
                                            if (m.type === "badge" && m.key === "category") {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap", CATEGORY_CHIP[cl.category]),
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$cruise$2d$lines$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryLabel"][cl.category]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 27
                                                    }, this)
                                                }, m.key, false, {
                                                    fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 25
                                                }, this);
                                            }
                                            if (m.type === "badge" && m.key === "atmosphere") {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap", ATMOSPHERE_CHIP[cl.atmosphere]),
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cruise$2d$lines$2f$cruise$2d$lines$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atmosphereLabelShort"][cl.atmosphere]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 27
                                                    }, this)
                                                }, m.key, false, {
                                                    fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 25
                                                }, this);
                                            }
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-4 text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: cl.averagePassengerAge
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 25
                                                }, this)
                                            }, m.key, false, {
                                                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                                lineNumber: 386,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    ]
                                }, cl.id, true, {
                                    fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                                    lineNumber: 272,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted-foreground text-center",
                children: "★ Mejor puntuación en esa categoría. Haz clic en cualquier encabezado para ordenar la tabla."
            }, void 0, false, {
                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_s(ComparisonTable, "PNl0x0fqUXTWJKLiyYmRT/cmOvc=");
_c = ComparisonTable;
// ── Sub-components ─────────────────────────────────────────────
function FilterGroup(param) {
    let { label, children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
        lineNumber: 417,
        columnNumber: 5
    }, this);
}
_c1 = FilterGroup;
function FilterChip(param) {
    let { active, onClick, accent = false, children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        "aria-pressed": active,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150", active ? accent ? "bg-accent text-accent-foreground" : "bg-foreground text-background" : "bg-background border border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
        lineNumber: 438,
        columnNumber: 5
    }, this);
}
_c2 = FilterChip;
function SortButton(param) {
    let { label, isSorted, dir, onClick, center = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide transition-colors duration-150", center ? "justify-center w-full" : "justify-start", isSorted ? "text-accent" : "text-muted-foreground hover:text-foreground"),
        children: [
            label,
            isSorted ? dir === "desc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                className: "h-3 w-3 shrink-0",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                lineNumber: 484,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                className: "h-3 w-3 shrink-0",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                lineNumber: 486,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
                className: "h-3 w-3 shrink-0 opacity-40",
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
                lineNumber: 489,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/cruise-lines/components/ComparisonTable.tsx",
        lineNumber: 470,
        columnNumber: 5
    }, this);
}
_c3 = SortButton;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ComparisonTable");
__turbopack_context__.k.register(_c1, "FilterGroup");
__turbopack_context__.k.register(_c2, "FilterChip");
__turbopack_context__.k.register(_c3, "SortButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_eb7ad15b._.js.map